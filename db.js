// aws-quiz/db.js
const DB_NAME = 'QuizPlatformDB';
const DB_VERSION = 1;

let db;

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => reject("IndexedDB error: " + event.target.error);

        request.onsuccess = (event) => {
            db = event.target.result;
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
        };
    });
}

function saveSettings(settings) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['settings'], 'readwrite');
        const store = transaction.objectStore('settings');
        settings.id = 'user_prefs'; // Singleton record
        const request = store.put(settings);
        request.onsuccess = () => resolve();
        request.onerror = (e) => reject(e.target.error);
    });
}

function getSettings() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['settings'], 'readonly');
        const store = transaction.objectStore('settings');
        const request = store.get('user_prefs');
        request.onsuccess = () => {
            // Default settings
            resolve(request.result || { correctionStyle: 'adaptive' }); 
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function importQuizData(jsonData) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['questions'], 'readwrite');
        const store = transaction.objectStore('questions');
        let count = 0;

        const domains = jsonData.domains || [];

        jsonData.quizzes.forEach(quiz => {
            const tags = quiz.tags || [];
            quiz.questions.forEach(q => {
                // Handle typo in original JSON
                const qId = q.quesiton_id || q.question_id; 
                const record = {
                    id: `${quiz.quiz_id}_${qId}`,
                    quiz_id: quiz.quiz_id,
                    quiz_title: quiz.title,
                    domains: domains,
                    tags: tags,
                    ...q
                };
                store.put(record);
                count++;
            });
        });

        transaction.oncomplete = () => resolve(count);
        transaction.onerror = (e) => reject(e.target.error);
    });
}

function checkAndLoadInitialData() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['questions'], 'readonly');
        const store = transaction.objectStore('questions');
        const request = store.count();

        request.onsuccess = () => {
            if (request.result === 0) {
                // DB is empty, load default questions
                fetch('questions-bank/AWS/AWS_CLF-C02.json')
                    .then(res => res.json())
                    .then(data => importQuizData(data))
                    .then(count => {
                        console.log(`Imported ${count} default questions.`);
                        resolve();
                    })
                    .catch(reject);
            } else {
                resolve(); // Data already exists
            }
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function saveProgress(questionId, sm2Data) {
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

function getProgress(questionId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['progress'], 'readonly');
        const store = transaction.objectStore('progress');
        const request = store.get(questionId);
        
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = (e) => reject(e.target.error);
    });
}

function getQuizzes() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['questions'], 'readonly');
        const store = transaction.objectStore('questions');
        const request = store.getAll();

        request.onsuccess = () => {
            const allQuestions = request.result;
            const quizMap = new Map();
            
            allQuestions.forEach(q => {
                const qId = q.quiz_id;
                if (!quizMap.has(qId)) {
                    quizMap.set(qId, q.quiz_title);
                }
            });

            const quizzes = Array.from(quizMap.entries()).map(([id, title]) => ({ id, title }));
            quizzes.sort((a, b) => a.id - b.id);
            resolve(quizzes);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function renderNavbar() {
    const navList = document.getElementById('dynamic-nav-list');
    if (!navList) return Promise.resolve();

    return getQuizzes().then(quizzes => {
        // Clear skeleton loaders or existing items
        navList.innerHTML = `<div class="px-2 py-3 text-xs uppercase tracking-widest font-bold opacity-40">Available Modules</div>`;
        
        quizzes.forEach(quiz => {
            const a = document.createElement('a');
            const urlParams = new URLSearchParams(window.location.search);
            const activeId = parseInt(urlParams.get('id'));
            const isActive = activeId === quiz.id;

            a.href = `quiz.html?id=${quiz.id}#id=${quiz.id}`;
            a.className = `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all group ${
                isActive 
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' 
                : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'
            }`;

            a.innerHTML = `
                <span class="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                    ${isActive ? 'auto_stories' : 'menu_book'}
                </span>
                <span class="font-medium truncate">${quiz.title}</span>
            `;
            navList.appendChild(a);
        });
    });
}

function updateContinueButton(selectedId) {
    const btn = document.getElementById('main-continue-btn');
    if (!btn) return;

    if (selectedId) {
        btn.href = `quiz.html?id=${selectedId}#id=${selectedId}`;
        btn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        btn.classList.add('shadow-primary/40');
        btn.title = "Jump back into your module";
    } else {
        btn.href = "#";
        btn.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        btn.classList.remove('shadow-primary/40');
        btn.title = "Please select a module below first";
    }
}

function renderQuizShortcuts() {
    const shortcutsContainer = document.getElementById('quiz-shortcuts');
    const wrapper = document.getElementById('quiz-shortcuts-container');
    if (!shortcutsContainer) return Promise.resolve();

    const selectedQuizId = localStorage.getItem('selectedQuizId');
    updateContinueButton(selectedQuizId);

    return getQuizzes().then(quizzes => {
        if (quizzes.length === 0) {
            wrapper.classList.add('hidden');
            return;
        }

        wrapper.classList.remove('hidden');
        shortcutsContainer.innerHTML = '';
        
        // Fun Mode Card
        const funCard = document.createElement('div');
        funCard.className = `group block p-5 rounded-2xl border-2 border-transparent bg-gradient-to-br from-primary to-secondary-container text-on-primary-container shadow-xl shadow-primary/20 transition-all animate-in zoom-in-95 duration-500 scale-100 active:scale-95 cursor-pointer`;
        funCard.innerHTML = `
            <div class="flex items-start justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-white/40 text-on-primary-container backdrop-blur-sm group-hover:rotate-12 transition-transform">
                    <span class="material-symbols-outlined text-[20px]">cruelty_free</span>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-widest opacity-80">Special Mode</span>
            </div>
            <h4 class="font-bold text-on-primary-container leading-tight transition-colors line-clamp-2">Fun Mode (Random 10)</h4>
            <div class="mt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-on-primary-container opacity-80 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <span>Start Playing</span>
                <span class="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
            </div>
        `;
        funCard.onclick = () => window.location.href = 'quiz.html?mode=fun#mode=fun';
        shortcutsContainer.appendChild(funCard);
        
        quizzes.forEach(quiz => {
            const card = document.createElement('div');
            const isSelected = selectedQuizId === quiz.id.toString();
            
            card.className = `group block p-5 rounded-2xl border-2 transition-all animate-in zoom-in-95 duration-500 scale-100 active:scale-95 cursor-pointer ${
                isSelected 
                ? 'bg-primary/5 border-primary shadow-xl shadow-primary/5' 
                : 'bg-white border-black/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5'
            }`;
            
            card.innerHTML = `
                <div class="flex items-start justify-between mb-4">
                    <div class="p-2.5 rounded-xl transition-colors ${
                        isSelected ? 'bg-primary text-on-primary' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-on-primary'
                    }">
                        <span class="material-symbols-outlined text-[20px]">${isSelected ? 'check_circle' : 'play_arrow'}</span>
                    </div>
                    <span class="text-[10px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-60 transition-opacity">Quiz ID: ${quiz.id}</span>
                </div>
                <h4 class="font-bold text-inverse-surface leading-tight transition-colors line-clamp-2 ${isSelected ? 'text-primary' : 'group-hover:text-primary'}">${quiz.title}</h4>
                <div class="mt-4 flex items-center text-[10px] font-bold uppercase tracking-widest text-primary ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0'}">
                    <span>${isSelected ? 'Currently Selected' : 'Select Module'}</span>
                    <span class="material-symbols-outlined text-[14px] ml-1">chevron_right</span>
                </div>
            `;

            card.onclick = () => {
                localStorage.setItem('selectedQuizId', quiz.id);
                renderQuizShortcuts(); // Re-render to update highlights and continue button
            };

            shortcutsContainer.appendChild(card);
        });
    });
}
