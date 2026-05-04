// aws-quiz/db.js
const DB_NAME = 'QuizPlatformDB';
const DB_VERSION = 3;

let dbPromise = null;

function getDB() {
    if (!dbPromise) {
        dbPromise = initDB();
    }
    return dbPromise;
}

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            console.error("IndexedDB error:", event.target.error);
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            
            // Store questions: key is quiz_id + '_' + question_id
            if (!db.objectStoreNames.contains('questions')) {
                const qStore = db.createObjectStore('questions', { keyPath: 'id' });
                qStore.createIndex('quiz_id', 'quiz_id', { unique: false });
            }

            // Store user progress (SM-2 data)
            if (!db.objectStoreNames.contains('progress')) {
                db.createObjectStore('progress', { keyPath: 'question_id' });
            }

            // Store user settings
            if (!db.objectStoreNames.contains('settings')) {
                db.createObjectStore('settings', { keyPath: 'id' });
            }

            // NEW in V2: Store quiz metadata
            if (!db.objectStoreNames.contains('quizzes')) {
                db.createObjectStore('quizzes', { keyPath: 'quiz_id' });
            }
        };
    });
}

async function saveSettings(settings) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['settings'], 'readwrite');
        const store = transaction.objectStore('settings');
        settings.id = 'user_prefs'; // Singleton record
        const request = store.put(settings);
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

async function getSettings() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['settings'], 'readonly');
        const store = transaction.objectStore('settings');
        const request = store.get('user_prefs');
        request.onsuccess = () => {
            // Default settings
            resolve(request.result || { 
                correctionStyle: 'adaptive', 
                showAnswers: true,
                expertiseLevel: 'professional'
            }); 
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function validateQuizData(data) {
    if (!data || typeof data !== 'object') return 'Invalid JSON structure';
    if (!Array.isArray(data.quizzes)) return 'Missing "quizzes" array';
    
    // Safety caps
    let totalQuestions = 0;
    
    for (const quiz of data.quizzes) {
        if (!quiz.quiz_id || !quiz.title) return `Quiz missing ID or title: ${JSON.stringify(quiz).substring(0, 50)}`;
        if (!Array.isArray(quiz.questions)) return `Quiz ${quiz.quiz_id} missing "questions" array`;
        
        totalQuestions += quiz.questions.length;
        if (totalQuestions > 500) return 'Import too large (max 500 questions per file)';

        for (const q of quiz.questions) {
            const qId = q.quesiton_id || q.question_id;
            if (!qId || !q.question_text || !Array.isArray(q.options)) {
                return `Question invalid in quiz ${quiz.quiz_id}: missing ID, text, or options`;
            }
            if (q.options.length < 2) return `Question ${qId} must have at least 2 options`;
            if (q.correct_answer_id === undefined) return `Question ${qId} is missing a correct answer`;
        }
    }
    return null; // Valid
}

function slugify(text) {
    if (!text) return 'untitled-quiz-' + Date.now();
    return text.toString().toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

async function importQuizData(jsonData) {
    const error = validateQuizData(jsonData);
    if (error) {
        throw new Error(`Data validation failed: ${error}`);
    }

    // Check for conflicts (simple quiz_id check)
    const existingQuizzes = await getQuizzes();
    const importedIds = jsonData.quizzes.map(q => q.quiz_id);
    const conflicts = existingQuizzes.filter(q => importedIds.includes(q.id));

    if (conflicts.length > 0) {
        const confirmMsg = `The following modules already exist: ${conflicts.map(c => c.title).join(', ')}. Overwrite them?`;
        if (!confirm(confirmMsg)) {
            console.log('Import cancelled by user due to conflicts.');
            return 0;
        }
    }

    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['questions', 'quizzes'], 'readwrite');
        const qStore = transaction.objectStore('questions');
        const quizMetadataStore = transaction.objectStore('quizzes');
        let count = 0;

        const domains = jsonData.domains || [];

        jsonData.quizzes.forEach(quiz => {
            const tags = quiz.tags || [];
            
            // Save Quiz Metadata
            quizMetadataStore.put({
                quiz_id: quiz.quiz_id,
                title: quiz.title,
                tags: tags,
                domains: domains,
                quiz_type: quiz.quiz_type || 'json'
            });

            quiz.questions.forEach(q => {
                // Handle typo in original JSON
                const qId = q.quesiton_id || q.question_id; 
                const record = {
                    id: `${quiz.quiz_id}_${qId}`,
                    quiz_id: quiz.quiz_id,
                    quiz_title: quiz.title,
                    domains: domains,
                    tags: tags,
                    quiz_type: quiz.quiz_type || 'json',
                    ...q
                };
                qStore.put(record);
                count++;
            });
        });

        transaction.oncomplete = () => resolve(count);
        transaction.onerror = (e) => reject(e.target.error);
    });
}

/**
 * Simple Regex-based Markdown Quiz Parser (Option 1: Checklist Style)
 */
function parseMarkdownQuiz(mdText) {
    const lines = mdText.split(/\r?\n/);
    const result = {
        domains: ["General"],
        quizzes: []
    };

    let currentQuiz = {
        quiz_id: null,
        title: "Imported Markdown Quiz",
        tags: [],
        quiz_type: 'markdown',
        questions: []
    };

    let currentQuestion = null;
    let inFrontmatter = false;
    let frontmatterLines = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Handle Frontmatter
        if (line.trim() === '---') {
            if (!inFrontmatter && frontmatterLines.length === 0) {
                inFrontmatter = true;
                continue;
            } else if (inFrontmatter) {
                inFrontmatter = false;
                // Parse frontmatter
                frontmatterLines.forEach(fLine => {
                    const separatorIndex = fLine.indexOf(':');
                    if (separatorIndex !== -1) {
                        const key = fLine.substring(0, separatorIndex).trim().toLowerCase();
                        const value = fLine.substring(separatorIndex + 1).trim();
                        
                        if (key === 'title') currentQuiz.title = value;
                        if (key === 'id') currentQuiz.quiz_id = value;
                        if (key === 'tags') currentQuiz.tags = value.replace(/[\[\]]/g, '').split(',').map(s => s.trim());
                        if (key === 'domains') result.domains = value.replace(/[\[\]]/g, '').split(',').map(s => s.trim());
                    }
                });

                // IMPLICIT ID GENERATION
                if (!currentQuiz.quiz_id && currentQuiz.title) {
                    const domainPrefix = result.domains && result.domains.length > 0 ? result.domains[0] + '-' : '';
                    currentQuiz.quiz_id = slugify(domainPrefix + currentQuiz.title);
                } else if (!currentQuiz.quiz_id) {
                    currentQuiz.quiz_id = 'quiz-' + Date.now();
                }

                continue;
            }
        }
        if (inFrontmatter) {
            frontmatterLines.push(line);
            continue;
        }

        // Handle Questions (# Question Text)
        const qMatch = line.match(/^#+\s+(.*)/);
        if (qMatch) {
            if (currentQuestion) currentQuiz.questions.push(currentQuestion);
            currentQuestion = {
                question_id: (currentQuiz.questions.length + 1).toString(),
                question_text: qMatch[1].trim(),
                options: [],
                correct_answer_id: []
            };
            continue;
        }

        // Handle Options (- [ ] Option Text)
        const optMatch = line.match(/^[-*+]\s+\[([ xX])\]\s+(.*)/);
        if (optMatch && currentQuestion) {
            const isCorrect = optMatch[1].toLowerCase() === 'x';
            const optText = optMatch[2].trim();
            const optId = (currentQuestion.options.length + 1).toString();
            
            currentQuestion.options.push({
                option_id: optId,
                option_text: optText
            });
            
            if (isCorrect) {
                currentQuestion.correct_answer_id.push(optId);
            }
            continue;
        }

        // Handle Explanations (> Explanation Text)
        if (line.trim().startsWith('>') && currentQuestion) {
            const expText = line.trim().substring(1).trim();
            currentQuestion.explanation = (currentQuestion.explanation ? currentQuestion.explanation + '\n' : '') + expText;
            continue;
        }

        // Append multi-line question text/context
        if (currentQuestion && line.trim() && !line.match(/^[-*+]\s+\[/)) {
            // If we haven't started options or explanations, it's part of the question
            if (currentQuestion.options.length === 0 && !currentQuestion.explanation) {
                 currentQuestion.question_text += '\n' + line;
            } else if (currentQuestion.explanation) {
                // Multi-line explanation handled above, but this catch-all helps for non-quoted lines in explanation block?
                // Actually, the regex above handles leading >. If user doesn't use > for every line, we might need more logic.
            }
        }
    }

    if (currentQuestion) currentQuiz.questions.push(currentQuestion);
    
    // Normalize correct_answer_id
    currentQuiz.questions.forEach(q => {
        if (q.correct_answer_id.length === 1) {
            q.correct_answer_id = q.correct_answer_id[0];
        }
    });

    result.quizzes.push(currentQuiz);
    return result;
}

async function loadManifestModule(filePath) {
    try {
        const mdRes = await fetch(filePath);
        if (!mdRes.ok) return 0;
        const mdText = await mdRes.text();
        const data = parseMarkdownQuiz(mdText);
        return await importQuizData(data);
    } catch (fileErr) {
        console.error(`Failed to load module ${filePath}:`, fileErr);
        return 0;
    }
}

async function checkAndLoadInitialData() {
    try {
        const db = await getDB();
        const manifestRes = await fetch('manifest.json');
        if (!manifestRes.ok) throw new Error('Could not find manifest.json');
        
        const manifest = await manifestRes.json();
        const modulesToLoad = manifest.modules || manifest;
        let totalNewQuestions = 0;

        // Cleanup buggy duplicates created by previous bug
        await new Promise((resolve) => {
            const tx = db.transaction(['quizzes', 'questions'], 'readwrite');
            const quizzesStore = tx.objectStore('quizzes');
            const questionsStore = tx.objectStore('questions');

            let pending = 2;
            const checkDone = () => { pending--; if(pending === 0) resolve(); };

            const qReq = quizzesStore.getAll();
            qReq.onsuccess = () => {
                qReq.result.forEach(q => {
                    if (/^\d{13}$/.test(q.quiz_id)) quizzesStore.delete(q.quiz_id);
                });
                checkDone();
            };
            
            const qstReq = questionsStore.getAll();
            qstReq.onsuccess = () => {
                qstReq.result.forEach(q => {
                    if (/^\d{13}$/.test(q.quiz_id)) questionsStore.delete(q.id);
                });
                checkDone();
            };
        });

        const existingQuizzes = await new Promise((resolve) => {
            const tx = db.transaction(['quizzes'], 'readonly');
            const store = tx.objectStore('quizzes');
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => resolve([]);
        });

        const existingIds = existingQuizzes.map(q => q.quiz_id);

        for (const filePath of modulesToLoad) {
            const parts = filePath.split('/');
            const domain = parts.length > 2 ? parts[1] : '';
            const fileName = parts.pop().replace('.md', '');
            
            const titleEquivalent = fileName.replace(/_/g, ' ');
            const predictedId = slugify((domain ? domain + '-' : '') + titleEquivalent);
            const predictedIdWithoutDomain = slugify(titleEquivalent);

            if (existingIds.includes(predictedId) || existingIds.includes(predictedIdWithoutDomain)) {
                continue;
            }

            const count = await loadManifestModule(filePath);
            if (count > 0) {
                totalNewQuestions += count;
                console.log(`- Loaded missing manifest module: ${fileName} (${count} questions)`);
            }
        }

        if (totalNewQuestions > 0) {
            console.log(`Pre-population complete. Added ${totalNewQuestions} new questions.`);
        }
    } catch (err) {
        console.error('Initial data check/load failed:', err);
    }
}

async function saveProgress(questionId, sm2Data) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['progress'], 'readwrite');
        const store = transaction.objectStore('progress');
        
        const record = {
            question_id: questionId,
            ...sm2Data,
            lastReviewed: new Date().toISOString()
        };
        
        const request = store.put(record);
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

async function getProgress(questionId) {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['progress'], 'readonly');
        const store = transaction.objectStore('progress');
        const request = store.get(questionId);
        
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = (e) => reject(e.target.error);
    });
}

async function getQuizzes() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['quizzes', 'questions'], 'readonly');
        const quizzesStore = transaction.objectStore('quizzes');
        const questionsStore = transaction.objectStore('questions');
        
        const quizMap = new Map();

        const req1 = quizzesStore.getAll();
        req1.onsuccess = (e) => {
            const quizzesData = e.target.result || [];
            quizzesData.forEach(q => {
                quizMap.set(q.quiz_id, { id: q.quiz_id, title: q.title, tags: q.tags });
            });

            const req2 = questionsStore.getAll();
            req2.onsuccess = (e2) => {
                const questions = e2.target.result || [];
                questions.forEach(q => {
                    if (!quizMap.has(q.quiz_id)) {
                        quizMap.set(q.quiz_id, { id: q.quiz_id, title: q.quiz_title, tags: q.tags || [] });
                    }
                });

                const quizzes = Array.from(quizMap.values());
                quizzes.sort((a, b) => {
                    const aIsNum = !isNaN(a.id);
                    const bIsNum = !isNaN(b.id);
                    
                    if (aIsNum && bIsNum) return parseInt(a.id) - parseInt(b.id);
                    if (aIsNum) return -1;
                    if (bIsNum) return 1;
                    return a.id.localeCompare(b.id);
                });
                resolve(quizzes);
            };
            req2.onerror = (e2) => reject(e2.target.error);
        };
        req1.onerror = (e) => reject(e.target.error);
    });
}

async function getRecentQuizIds() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['progress'], 'readonly');
        const store = transaction.objectStore('progress');
        const request = store.getAll();

        request.onsuccess = () => {
            const progress = request.result;
            const quizStatus = new Map();
            
            progress.forEach(p => {
                const quizId = p.question_id.split('_')[0];
                const lastReviewed = new Date(p.lastReviewed).getTime();
                
                if (!quizStatus.has(quizId) || lastReviewed > quizStatus.get(quizId)) {
                    quizStatus.set(quizId, lastReviewed);
                }
            });

            const sortedQuizIds = Array.from(quizStatus.entries())
                .sort((a, b) => b[1] - a[1])
                .map(entry => entry[0]);
                
            resolve(sortedQuizIds);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function fuzzyMatch(query, text) {
    if (!query) return true;
    const tokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    const target = text.toLowerCase();
    return tokens.every(token => target.includes(token));
}

function fuzzySearch(quizzes, query) {
    if (!query) return quizzes;
    return quizzes.filter(quiz => {
        const searchableText = `${quiz.title} ${quiz.id} ${quiz.tags ? quiz.tags.join(' ') : ''}`;
        return fuzzyMatch(query, searchableText);
    });
}

function renderNavbar(filterQuery = '') {
    const navList = document.getElementById('dynamic-nav-list');
    if (!navList) return Promise.resolve();

    return getQuizzes().then(quizzes => {
        // Clear skeleton loaders or existing items
        navList.replaceChildren();
        
        const filteredQuizzes = fuzzySearch(quizzes, filterQuery);

        // Header
        const header = document.createElement('div');
        header.className = "px-2 py-3 text-xs uppercase tracking-widest font-bold opacity-40";
        header.textContent = filterQuery ? "Search Results" : "Available Modules";
        navList.appendChild(header);

        if (filteredQuizzes.length === 0) {
            const emptyState = document.createElement('div');
            emptyState.className = "flex flex-col items-center justify-center py-12 px-4 text-center space-y-3 animate-in fade-in duration-500";
            
            const iconDiv = document.createElement('div');
            iconDiv.className = "w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant/20";
            const iconSpan = document.createElement('span');
            iconSpan.className = "material-symbols-outlined text-3xl";
            iconSpan.textContent = "search_off";
            iconDiv.appendChild(iconSpan);

            const textDiv = document.createElement('div');
            textDiv.className = "space-y-1";
            const p1 = document.createElement('p');
            p1.className = "text-sm font-bold text-inverse-surface";
            p1.textContent = "No modules found";
            const p2 = document.createElement('p');
            p2.className = "text-[11px] text-on-surface-variant/40 leading-tight";
            p2.textContent = "Try different keywords or check for typos.";
            textDiv.appendChild(p1);
            textDiv.appendChild(p2);

            emptyState.appendChild(iconDiv);
            emptyState.appendChild(textDiv);

            navList.appendChild(emptyState);
            return;
        }
        
        filteredQuizzes.forEach(quiz => {
            const a = document.createElement('a');
            const urlParams = new URLSearchParams(window.location.search);
            const rawActiveId = urlParams.get('id');
            const activeId = (rawActiveId && !isNaN(rawActiveId)) ? parseInt(rawActiveId) : rawActiveId;
            const isActive = activeId == quiz.id;

            a.href = `quiz.html?id=${quiz.id}#id=${quiz.id}`;
            a.className = `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
                isActive 
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' 
                : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'
            }`;

            const iconSpan = document.createElement('span');
            iconSpan.className = "material-symbols-outlined text-[20px] transition-transform group-hover:scale-110";
            iconSpan.textContent = isActive ? 'auto_stories' : 'menu_book';

            const titleSpan = document.createElement('span');
            titleSpan.className = "font-medium truncate";
            titleSpan.textContent = quiz.title;

            a.appendChild(iconSpan);
            a.appendChild(titleSpan);
            navList.appendChild(a);
        });
    });
}



function renderQuizShortcuts() {
    const shortcutsContainer = document.getElementById('quiz-shortcuts');
    const wrapper = document.getElementById('quiz-shortcuts-container');
    if (!shortcutsContainer) return Promise.resolve();

    const selectedQuizId = localStorage.getItem('selectedQuizId');

    return Promise.all([getQuizzes(), getRecentQuizIds(), getReviewStats()]).then(([allQuizzes, recentQuizIds, weakCount]) => {
        // Map recent IDs to quiz objects and limit to 5
        const quizzes = recentQuizIds
            .map(id => allQuizzes.find(q => q.id.toString() === id.toString()))
            .filter(q => q !== undefined)
            .slice(0, 5);

        if (quizzes.length === 0 && weakCount === 0) {
            wrapper.classList.add('hidden');
            return;
        }

        wrapper.classList.remove('hidden');
        shortcutsContainer.replaceChildren();
        
        // Smart Review Card (Amber Gradient) - ONLY if weakCount > 0
        if (weakCount > 0) {
            const reviewCard = document.createElement('div');
            reviewCard.className = `group block p-5 rounded-2xl border-2 border-transparent bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl shadow-amber-200/50 transition-all animate-in slide-in-from-left-5 duration-500 scale-100 active:scale-95 cursor-pointer md:col-span-2`;
            
            const flexDiv = document.createElement('div');
            flexDiv.className = "flex items-start justify-between mb-4";
            
            const iconDiv = document.createElement('div');
            iconDiv.className = "p-2.5 rounded-xl bg-white/20 text-white backdrop-blur-md group-hover:rotate-12 transition-transform";
            const iconSpan = document.createElement('span');
            iconSpan.className = "material-symbols-outlined text-[24px]";
            iconSpan.textContent = "psychology";
            iconDiv.appendChild(iconSpan);

            const countContainer = document.createElement('div');
            countContainer.className = "flex flex-col items-end";
            const countLabel = document.createElement('span');
            countLabel.className = "text-[10px] font-bold uppercase tracking-widest opacity-80";
            countLabel.textContent = "Smart Review";
            const countSpan = document.createElement('span');
            countSpan.className = "bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold mt-1 backdrop-blur-sm";
            countSpan.id = "smart-review-count";
            countSpan.textContent = `${weakCount} Topics`;
            countContainer.appendChild(countLabel);
            countContainer.appendChild(countSpan);
            
            flexDiv.appendChild(iconDiv);
            flexDiv.appendChild(countContainer);

            const h4 = document.createElement('h4');
            h4.className = "font-extrabold text-lg leading-tight";
            h4.textContent = "Master Your Weaknesses";

            const pDesc = document.createElement('p');
            pDesc.className = "text-sm opacity-90 mt-1";
            pDesc.textContent = "Personalized spaced-repetition session focused on your recently failed concepts.";

            const actionDiv = document.createElement('div');
            actionDiv.className = "mt-4 flex items-center text-[10px] font-bold uppercase tracking-widest hover:translate-x-1 transition-transform";
            const actionSpan1 = document.createElement('span');
            actionSpan1.textContent = "Start Focused Session";
            const actionSpan2 = document.createElement('span');
            actionSpan2.className = "material-symbols-outlined text-[14px] ml-1";
            actionSpan2.textContent = "bolt";
            actionDiv.appendChild(actionSpan1);
            actionDiv.appendChild(actionSpan2);

            reviewCard.appendChild(flexDiv);
            reviewCard.appendChild(h4);
            reviewCard.appendChild(pDesc);
            reviewCard.appendChild(actionDiv);

            reviewCard.onclick = () => window.location.href = 'quiz.html?mode=smart#mode=smart';
            shortcutsContainer.appendChild(reviewCard);
        }

        // Fun Mode Card
        const funCard = document.createElement('div');
        funCard.className = `group block p-5 rounded-2xl border-2 border-transparent bg-gradient-to-br from-primary to-secondary-container text-on-primary-container shadow-xl shadow-primary/20 transition-all animate-in zoom-in-95 duration-500 scale-100 active:scale-95 cursor-pointer`;
        
        const fFlex = document.createElement('div');
        fFlex.className = "flex items-start justify-between mb-4";
        const fIconDiv = document.createElement('div');
        fIconDiv.className = "p-2.5 rounded-xl bg-white/40 text-on-primary-container backdrop-blur-sm group-hover:rotate-12 transition-transform";
        const fIconSpan = document.createElement('span');
        fIconSpan.className = "material-symbols-outlined text-[20px]";
        fIconSpan.textContent = "cruelty_free";
        fIconDiv.appendChild(fIconSpan);
        const fLabel = document.createElement('span');
        fLabel.className = "text-[10px] font-bold uppercase tracking-widest opacity-80";
        fLabel.textContent = "Special Mode";
        fFlex.appendChild(fIconDiv);
        fFlex.appendChild(fLabel);

        const fH4 = document.createElement('h4');
        fH4.className = "font-bold text-on-primary-container leading-tight transition-colors line-clamp-2";
        fH4.textContent = "Fun Mode (Random 10)";

        const fAction = document.createElement('div');
        fAction.className = "mt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-on-primary-container opacity-80 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0";
        const fa1 = document.createElement('span');
        fa1.textContent = "Start Playing";
        const fa2 = document.createElement('span');
        fa2.className = "material-symbols-outlined text-[14px] ml-1";
        fa2.textContent = "arrow_forward";
        fAction.appendChild(fa1);
        fAction.appendChild(fa2);

        funCard.appendChild(fFlex);
        funCard.appendChild(fH4);
        funCard.appendChild(fAction);
        funCard.onclick = () => window.location.href = 'quiz.html?mode=fun#mode=fun';
        shortcutsContainer.appendChild(funCard);
        
        quizzes.forEach(quiz => {
            const card = document.createElement('div');
            const isSelected = selectedQuizId === quiz.id.toString();
            
            card.className = `group block p-5 rounded-2xl border-2 transition-all animate-in zoom-in-95 duration-500 scale-100 active:scale-95 cursor-pointer ${
                isSelected 
                ? 'bg-primary/5 border-primary selected-card-glow' 
                : 'bg-white border-black/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5'
            }`;
            
            const qFlex = document.createElement('div');
            qFlex.className = "flex items-start justify-between mb-4";
            
            const qIconDiv = document.createElement('div');
            qIconDiv.className = `p-2.5 rounded-xl transition-all duration-300 ${
                isSelected ? 'bg-primary text-on-primary animate-pulse-ring' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-on-primary'
            }`;
            const qIconSpan = document.createElement('span');
            qIconSpan.className = "material-symbols-outlined text-[20px]";
            qIconSpan.textContent = isSelected ? 'rocket_launch' : 'play_arrow';
            qIconDiv.appendChild(qIconSpan);

            const qIdSpan = document.createElement('span');
            qIdSpan.className = "text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-60 transition-opacity";
            qIdSpan.textContent = `Quiz ID: ${quiz.id}`;

            qFlex.appendChild(qIconDiv);
            qFlex.appendChild(qIdSpan);

            const qTitle = document.createElement('h4');
            qTitle.className = `font-bold text-inverse-surface leading-tight transition-colors line-clamp-2 ${isSelected ? 'text-primary' : 'group-hover:text-primary'}`;
            qTitle.textContent = quiz.title;

            const qAction = document.createElement('div');
            qAction.className = `mt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-primary ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0'}`;
            
            const qa1 = document.createElement('span');
            if (isSelected) qa1.className = "animate-text-reveal";
            qa1.textContent = isSelected ? 'Click again to Start' : 'Select Module';
            
            const qa2 = document.createElement('span');
            qa2.className = `material-symbols-outlined text-[14px] ml-1 ${isSelected ? 'animate-bounce' : ''}`;
            qa2.textContent = isSelected ? 'arrow_forward' : 'chevron_right';

            qAction.appendChild(qa1);
            qAction.appendChild(qa2);

            card.appendChild(qFlex);
            card.appendChild(qTitle);
            card.appendChild(qAction);

            card.onclick = () => {
                const isAlreadySelected = localStorage.getItem('selectedQuizId') === quiz.id.toString();
                if (isAlreadySelected) {
                    window.location.href = `quiz.html?id=${quiz.id}#id=${quiz.id}`;
                } else {
                    localStorage.setItem('selectedQuizId', quiz.id);
                    renderQuizShortcuts(); // Re-render to update highlights
                }
            };

            shortcutsContainer.appendChild(card);
        });
    });
}
async function getReviewStats() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['progress'], 'readonly');
        const store = transaction.objectStore('progress');
        const request = store.getAll();
        request.onsuccess = () => {
            const now = new Date();
            const weak = request.result.filter(p => {
                const isOverdue = p.nextReview ? new Date(p.nextReview) <= now : true;
                const isUnstable = p.repetitions < 3;
                return isOverdue || isUnstable;
            });
            resolve(weak.length);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

async function getReviewQuestions() {
    const db = await getDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['progress', 'questions'], 'readonly');
        const pStore = transaction.objectStore('progress');
        const qStore = transaction.objectStore('questions');
        
        const pRequest = pStore.getAll();
        pRequest.onsuccess = () => {
            const progress = pRequest.result;
            const now = new Date();
            
            // Filter and shuffle
            const weakProgress = progress
                .filter(p => (p.repetitions < 3) || (p.nextReview && new Date(p.nextReview) <= now))
                .sort(() => 0.5 - Math.random())
                .slice(0, 20);

            if (weakProgress.length === 0) return resolve([]);

            const qIds = weakProgress.map(p => p.question_id);
            const questions = [];
            let loadedCount = 0;

            qIds.forEach(id => {
                const qRequest = qStore.get(id);
                qRequest.onsuccess = () => {
                    if (qRequest.result) {
                        const pData = weakProgress.find(p => p.question_id === id);
                        questions.push({
                            ...qRequest.result,
                            feynman_explanation: pData ? pData.feynman_explanation : null,
                            sm2: pData
                        });
                    }
                    loadedCount++;
                    if (loadedCount === qIds.length) {
                        resolve(questions);
                    }
                };
                qRequest.onerror = (e) => {
                    loadedCount++;
                    if (loadedCount === qIds.length) resolve(questions);
                };
            });
        };
        pRequest.onerror = (e) => reject(pRequest.error);
    });
}

async function exportQuizToMarkdown(quizId) {
    const db = await getDB();
    
    // Fetch quiz metadata
    const quizMetadata = await new Promise((resolve, reject) => {
        const tx = db.transaction(['quizzes'], 'readonly');
        const store = tx.objectStore('quizzes');
        const req = store.getAll();
        req.onsuccess = () => {
            const all = req.result;
            const match = all.find(q => q.quiz_id == quizId);
            resolve(match);
        };
        req.onerror = () => reject(req.error);
    });

    if (!quizMetadata) {
        console.warn(`Quiz metadata not found for ID: ${quizId}. Using fallback.`);
        quizMetadata = {
            quiz_id: quizId,
            title: `Quiz ${quizId}`,
            tags: [],
            domains: []
        };
    }

    // Fetch all questions for this quiz
    const questions = await new Promise((resolve, reject) => {
        const tx = db.transaction(['questions'], 'readonly');
        const store = tx.objectStore('questions');
        const req = store.getAll();
        req.onsuccess = () => {
            const all = req.result;
            const match = all.filter(q => q.quiz_id == quizId);
            resolve(match);
        };
        req.onerror = () => reject(req.error);
    });

    // Generate Markdown
    let md = `---\n`;
    md += `title: ${quizMetadata.title || "Untitled Quiz"}\n`;
    
    if (quizMetadata.tags && quizMetadata.tags.length > 0) {
        md += `tags: [${quizMetadata.tags.join(', ')}]\n`;
    }
    
    if (quizMetadata.domains && quizMetadata.domains.length > 0) {
        md += `domains: [${quizMetadata.domains.join(', ')}]\n`;
    }
    
    md += `id: ${quizMetadata.quiz_id}\n`;
    md += `---\n\n`;

    // Sort questions by their original question_id (numeric if possible)
    questions.sort((a, b) => {
        const idA = parseInt(a.quesiton_id || a.question_id);
        const idB = parseInt(b.quesiton_id || b.question_id);
        if (!isNaN(idA) && !isNaN(idB)) return idA - idB;
        return 0;
    });

    questions.forEach(q => {
        md += `# ${q.question_text.trim()}\n\n`;
        
        q.options.forEach(opt => {
            let isCorrect = false;
            if (Array.isArray(q.correct_answer_id)) {
                isCorrect = q.correct_answer_id.includes(opt.option_id);
            } else {
                isCorrect = String(q.correct_answer_id) === String(opt.option_id);
            }
            md += `- [${isCorrect ? 'x' : ' '}] ${opt.option_text}\n`;
        });
        
        if (q.explanation && q.explanation.trim() !== '') {
            md += `\n> ${q.explanation.trim().replace(/\n/g, '\n> ')}\n`;
        }
        md += `\n`;
    });

    return {
        markdown: md,
        filename: `${slugify(quizMetadata.title || quizMetadata.quiz_id)}.md`
    };
}

function downloadMarkdown(content, filename) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
