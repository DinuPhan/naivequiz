document.addEventListener('DOMContentLoaded', () => {
    const answerButtons = document.getElementById('answer-buttons');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const quizApp = document.getElementById('quiz-app');
    const introSection = document.getElementById('intro-section');
    const resultDiv = document.getElementById('result');
    const PROGRESS_KEY = 'naivequiz_progress';
    const ACCOLADES = [
        "Brilliant!", "Keep it up!", "Spot on!", "Unstoppable!",
        "You've got this!", "Sharp eye!", "Pure focus!", "On fire! 🔥",
        "Genius!", "Keep climbing!", "Solid progress!", "Excellent! ✨",
        "Well played!", "Mastery in motion!", "Simply great!", "Outstanding!"
    ];
    const nextBtn = document.getElementById('next-btn');
    const viewResultsBtn = document.getElementById('view-results-btn');
    const detailsSection = document.getElementById('details');

    let currentQuestionIndex = -1;
    let questions = [];
    let currentQuizId = null;
    let questionHistory = [];
    let selectedAnswers = [];
    let questionTextArr = [];
    let twoanswers = false;
    let threeanswers = false;
    let totalScore = 0;
    let currentScore = 0;
    let userSettings = { showAnswers: true };

    let currentSelectedAnswers = [];
    let currentSelectedAnswersAll = [];

    /**
     * SECURE MARKDOWN RENDERER
     * Uses Marked.js + DOMPurify for hacker-proof rich text
     */
    function renderRichText(element, md) {
        if (!element || !md) return;

        // Check if libraries are loaded (CDN might fail or be blocked by CSP if misconfigured)
        if (typeof marked === 'undefined' || typeof DOMPurify === 'undefined') {
            element.textContent = md; // Fallback to safe text
            return;
        }

        try {
            const rawHtml = marked.parse(md);
            const cleanHtml = DOMPurify.sanitize(rawHtml);
            element.innerHTML = cleanHtml;

            // Trigger Highlight.js for code blocks
            if (typeof hljs !== 'undefined') {
                element.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            }
        } catch (e) {
            console.error("Rich rendering failed:", e);
            element.textContent = md;
        }
    }

    let currentCorrectAnsArr = [];
    let currentCorrectAnsArrAll = [];

    let correct_or_incorrect = [];

    function updateProgress() {
        const percent = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (progressText) progressText.innerText = `${percent}%`;
    }

    function loadQuizMetadataAndQuestions() {
        return new Promise((resolve, reject) => {
            const urlParams = new URLSearchParams(window.location.search);
            const hashParams = new URLSearchParams(window.location.hash.substring(1));

            const rawId = urlParams.get('id') || hashParams.get('id');
            const targetQuizId = rawId ? (isNaN(rawId) ? rawId : parseInt(rawId)) : 1;
            const mode = urlParams.get('mode') || hashParams.get('mode');

            const finalizeLoad = (quizTitle) => {
                if (questions.length === 0) {
                    const titleElem = document.getElementById('quiz-title');
                    if (titleElem) titleElem.innerText = "No questions for review!";
                    if (introSection) introSection.classList.remove('hidden');
                    return reject("No questions found");
                }

                const totalQuestions = questions.length;
                const passingMarks = Math.ceil(totalQuestions * 0.7);

                if (document.getElementById('page-title')) document.getElementById('page-title').innerText = quizTitle;
                if (document.getElementById('quiz-title')) document.getElementById('quiz-title').innerText = quizTitle;
                if (document.getElementById('quiz-title-header')) document.getElementById('quiz-title-header').innerText = quizTitle;
                if (document.getElementById('quiz-question-count')) document.getElementById('quiz-question-count').innerText = totalQuestions;
                if (document.getElementById('quiz-total-marks')) document.getElementById('quiz-total-marks').innerText = totalQuestions;
                if (document.getElementById('quiz-passing-marks')) document.getElementById('quiz-passing-marks').innerText = passingMarks;

                if (introSection) introSection.classList.remove('hidden');

                // Export button logic
                const exportBtn = document.getElementById('export-module-btn');
                if (exportBtn) {
                    if (mode === 'fun' || mode === 'smart') {
                        exportBtn.style.display = 'none';
                    } else {
                        exportBtn.style.display = 'flex';
                        // Clean up old listeners
                        const newExportBtn = exportBtn.cloneNode(true);
                        exportBtn.parentNode.replaceChild(newExportBtn, exportBtn);

                        newExportBtn.addEventListener('click', async () => {
                            try {
                                const btnSpan = newExportBtn.querySelector('span:last-child');
                                const originalText = btnSpan.innerText;
                                btnSpan.innerText = "Exporting...";

                                const { markdown, filename } = await exportQuizToMarkdown(currentQuizId);
                                downloadMarkdown(markdown, filename);

                                btnSpan.innerText = "Done!";
                                setTimeout(() => btnSpan.innerText = originalText, 2000);
                            } catch (err) {
                                console.error("Export failed:", err);
                                alert("Failed to export module.");
                            }
                        });
                    }
                }

                resolve();
            };

            if (mode === 'smart') {
                getReviewQuestions().then(reviewQuestions => {
                    questions = reviewQuestions;
                    currentQuizId = 'smart';
                    finalizeLoad("Smart Review (Wrong Questions)");
                }).catch(reject);
                return;
            }

            getDB().then(db => {
                const transaction = db.transaction(['questions'], 'readonly');
                const store = transaction.objectStore('questions');
                const request = store.getAll();

                request.onsuccess = () => {
                    const allData = request.result;
                    let quizTitle = "";

                    if (mode === 'fun') {
                        const shuffled = [...allData].sort(() => 0.5 - Math.random());
                        questions = shuffled.slice(0, 10);
                        currentQuizId = 'fun';
                        quizTitle = "Fun Mode (Random 10)";
                    } else {
                        questions = allData.filter(q => q.quiz_id == targetQuizId);
                        currentQuizId = targetQuizId;
                        quizTitle = questions.length > 0 ? (questions[0].quiz_title || "Quiz " + targetQuizId) : "Quiz " + targetQuizId;
                    }

                    finalizeLoad(quizTitle);
                };
                request.onerror = (e) => reject(e.target.error);
            }).catch(reject);
        });
    }

    if (typeof initDB === 'function') {
        initDB()
            .then(() => checkAndLoadInitialData())
            .then(() => renderNavbar())
            .then(() => loadQuizMetadataAndQuestions())
            .then(() => {
                const startBtn = document.getElementById('start-quiz-btn');
                if (startBtn) {
                    startBtn.addEventListener('click', () => {
                        if (introSection) introSection.classList.add('hidden');
                        if (quizApp) quizApp.classList.remove('hidden');
                        document.getElementById('quiz-progress-container')?.classList.remove('hidden');
                        initSettings();
                        loadNextQuestion();
                    });
                }
            })
            .catch(error => console.error('Error loading quiz data:', error));
    }

    function initSettings() {
        if (typeof getSettings === 'function') {
            getSettings().then(settings => {
                userSettings = settings;
                syncSettingsUI();
            });
        }

        const toggleBtn = document.getElementById('show-answers-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                userSettings.showAnswers = !userSettings.showAnswers;
                if (typeof saveSettings === 'function') {
                    saveSettings(userSettings);
                }
                syncSettingsUI();
            });
        }

        // Expertise Level Selection
        document.querySelectorAll('.expertise-btn').forEach(btn => {
            btn.onclick = () => {
                userSettings.expertiseLevel = btn.dataset.level;
                if (typeof saveSettings === 'function') {
                    saveSettings(userSettings);
                }
                syncSettingsUI();
            };
        });
    }

    function syncSettingsUI() {
        const bg = document.getElementById('show-answers-bg');
        const dot = document.getElementById('show-answers-dot');
        const label = document.getElementById('show-answers-label');

        if (userSettings.showAnswers) {
            if (bg) bg.classList.replace('bg-surface-container-highest', 'bg-primary');
            if (dot) dot.classList.replace('translate-x-0', 'translate-x-4');
            if (label) label.innerText = 'On';
        } else {
            if (bg) bg.classList.replace('bg-primary', 'bg-surface-container-highest');
            if (dot) dot.classList.replace('translate-x-4', 'translate-x-0');
            if (label) label.innerText = 'Off';
        }

        // Expertise Level UI
        document.querySelectorAll('.expertise-btn').forEach(btn => {
            if (btn.dataset.level === userSettings.expertiseLevel) {
                btn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
                btn.classList.remove('hover:bg-white/50', 'text-on-surface-variant');
            } else {
                btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
                btn.classList.add('hover:bg-white/50', 'text-on-surface-variant');
            }
        });
    }

    nextBtn.addEventListener('click', loadNextQuestion);

    function loadNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * questions.length);
            } while (questionHistory.includes(randomIndex));

            currentQuestionIndex++;
            questionHistory.push(randomIndex);
            const question = questions[randomIndex];
            displayQuestion(question);
            updateProgress();
        } else {
            showScore();
        }
    }

    function displayQuestion(question) {
        resetState();

        const feynmanSection = document.getElementById('feynman-section');
        const saveFeynmanBtn = document.getElementById('save-feynman-btn');
        if (feynmanSection) feynmanSection.classList.add('hidden');
        if (saveFeynmanBtn) {
            const btnText = saveFeynmanBtn.querySelector('span:not(.material-symbols-outlined)');
            const btnIcon = saveFeynmanBtn.querySelector('.material-symbols-outlined');
            if (btnText) btnText.innerText = 'Continue';
            if (btnIcon) btnIcon.innerText = 'arrow_forward';
        }
        document.getElementById('feynman-textarea').value = '';

        currentScore = 0;
        document.getElementById('question_no').innerText = `Question ${currentQuestionIndex + 1}`;
        renderRichText(document.getElementById('question'), question.question_text);
        questionTextArr.push(question.question_text);

        // Handle Personal Notes (Active Recall)
        const notesContainer = document.getElementById('notes-container');
        const notesText = document.getElementById('notes-text');
        const notesContent = document.getElementById('notes-content');
        const toggleBtn = document.getElementById('toggle-notes-btn');
        const toggleIcon = document.getElementById('notes-toggle-icon');

        if (notesContainer && question.feynman_explanation) {
            notesContainer.classList.remove('hidden');
            notesText.innerText = question.feynman_explanation;

            toggleBtn.onclick = () => {
                const isHidden = notesContent.classList.contains('hidden');
                if (isHidden) {
                    notesContent.classList.remove('hidden');
                    toggleIcon.style.transform = 'rotate(180deg)';
                } else {
                    notesContent.classList.add('hidden');
                    toggleIcon.style.transform = 'rotate(0deg)';
                }
            };
        }

        const labels = ['A', 'B', 'C', 'D', 'E', 'F'];

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "group w-full min-h-[64px] flex items-center px-6 py-4 rounded-3xl border-2 border-surface-container-highest bg-white hover:border-primary/40 hover:bg-primary/5 transition-all text-left space-x-4 animate-in fade-in slide-in-from-bottom-2 duration-300";
            button.style.animationDelay = `${index * 100}ms`;

            const labelSpan = document.createElement('span');
            labelSpan.className = "flex-shrink-0 w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface-variant font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all uppercase text-sm";
            labelSpan.textContent = labels[index] || index + 1;

            const textSpan = document.createElement('span');
            textSpan.className = "flex-1 text-sm font-medium leading-relaxed";
            renderRichText(textSpan, option.option_text);

            button.appendChild(labelSpan);
            button.appendChild(textSpan);

            answerButtons.appendChild(button);

            if (Array.isArray(question.correct_answer_id)) {
                if (question.correct_answer_id.includes(option.option_id)) {
                    button.dataset.correct = true;
                    if (question.correct_answer_id.length === 2) twoanswers = true;
                    if (question.correct_answer_id.length === 3) threeanswers = true;
                    currentCorrectAnsArr.push(option.option_text);
                }
            } else {
                if (question.correct_answer_id == option.option_id) {
                    button.dataset.correct = true;
                    currentCorrectAnsArr.push(option.option_text);
                }
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function selectAnswer(e) {
        const selectedBtn = e.currentTarget;
        const isCorrect = selectedBtn.dataset.correct === "true";

        // Prevent double selecting same button
        if (selectedBtn.disabled) return;
        selectedBtn.disabled = true;

        const labelSpan = selectedBtn.children[0];

        if (isCorrect) {
            selectedBtn.classList.replace('border-surface-container-highest', 'border-success');
            selectedBtn.classList.add('bg-success/5');
            labelSpan.classList.replace('bg-surface-container-highest', 'bg-success');
            labelSpan.classList.replace('text-on-surface-variant', 'text-on-primary');
            currentSelectedAnswers.push(selectedBtn.children[1].innerText);
            currentScore++;
        } else {
            selectedBtn.classList.replace('border-surface-container-highest', 'border-error');
            selectedBtn.classList.add('bg-error/5');
            labelSpan.classList.replace('bg-surface-container-highest', 'bg-error');
            labelSpan.classList.replace('text-on-surface-variant', 'text-on-primary');
            currentSelectedAnswers.push(selectedBtn.children[1].innerText);
        }

        selectedAnswers.push(selectedBtn);

        // Show selection feedback even if showAnswers is false
        if (!userSettings.showAnswers) {
            selectedBtn.classList.replace('border-surface-container-highest', 'border-primary/40');
            selectedBtn.classList.add('bg-primary/5');
            labelSpan.classList.replace('bg-surface-container-highest', 'bg-primary/40');
            labelSpan.classList.replace('text-on-surface-variant', 'text-on-primary');
        }

        let questionComplete = false;
        if (twoanswers && selectedAnswers.length === 2) questionComplete = true;
        else if (threeanswers && selectedAnswers.length === 3) questionComplete = true;
        else if (!twoanswers && !threeanswers && selectedAnswers.length === 1) questionComplete = true;

        if (questionComplete) {
            const currentQAll = questions[questionHistory[currentQuestionIndex]];

            // Disable all other buttons and inject AI shortcut
            Array.from(answerButtons.children).forEach(button => {
                button.disabled = true;
                // Reveal correct answers if not already selected
                if (button.dataset.correct === "true" && !button.classList.contains('border-success') && userSettings.showAnswers) {
                    button.classList.replace('border-surface-container-highest', 'border-success/40');
                    button.children[0].classList.replace('bg-surface-container-highest', 'bg-success/40');
                }

                // Add AI Shortcut button
                const optionText = button.children[1].innerText;
                const isCorrectOpt = button.dataset.correct === "true";

                const aiBtn = document.createElement('button');
                aiBtn.className = "ml-auto p-2 rounded-xl bg-surface-container-highest text-primary hover:bg-primary/20 transition-colors z-10 flex-shrink-0 group/ai relative hover:scale-110 active:scale-95";
                aiBtn.innerHTML = `
                    <span class="material-symbols-outlined text-[18px]">psychology_alt</span>
                    <span class="absolute right-0 top-full mt-2 w-max px-2 py-1 bg-inverse-surface text-surface text-[10px] uppercase font-bold tracking-widest rounded opacity-0 group-hover/ai:opacity-100 transition-opacity pointer-events-none">Ask AI</span>
                `;
                aiBtn.onclick = (event) => {
                    event.stopPropagation();
                    event.preventDefault();

                    const domainCtx = currentQAll.domains && currentQAll.domains.length ? `\nDomain: ${currentQAll.domains.join(', ')}` : '';
                    const tagsCtx = currentQAll.tags && currentQAll.tags.length ? `\nTags: ${currentQAll.tags.join(', ')}` : '';

                    let expertiseInstruction = "Act as an expert Tutor.";
                    if (userSettings.expertiseLevel === 'eli5') {
                        expertiseInstruction = "Act as a friendly tutor and explain this concept like I am five years old, using simple analogies and no technical jargon.";
                    } else if (userSettings.expertiseLevel === '18') {
                        expertiseInstruction = "Act as an academic tutor and explain this concept clearly for an 18-year-old student, being direct and educational.";
                    } else {
                        expertiseInstruction = "Act as a professional industry expert. Use precise technical terminology and be extremely concise and efficient in your explanation.";
                    }

                    const prompt = `${expertiseInstruction}${domainCtx}${tagsCtx}
Question: ${currentQAll.question_text}

Options:
${Array.from(answerButtons.children).map(b => '- ' + b.children[1].innerText).join('\n')}

My Selected Answer: ${currentSelectedAnswers.join(', ') || 'None'}
The Option In Question: ${optionText}
Is it Correct?: ${isCorrectOpt ? 'Yes' : 'No'}

Please explain clearly and concisely why this option is correct or incorrect based on core concepts and best practices.`;

                    navigator.clipboard.writeText(prompt).then(() => {
                        const tip = aiBtn.querySelector('.absolute');
                        tip.innerText = "Copied!";
                        tip.classList.add('opacity-100', 'text-success');
                        aiBtn.classList.replace('bg-surface-container-highest', 'bg-primary/20');
                        setTimeout(() => {
                            tip.innerText = "Ask AI";
                            tip.classList.remove('opacity-100', 'text-success');
                            aiBtn.classList.replace('bg-primary/20', 'bg-surface-container-highest');
                        }, 2000);
                    });
                };
                button.appendChild(aiBtn);
            });

            let result = "Wrong";
            if (twoanswers && currentScore === 2) result = "Correct";
            else if (threeanswers && currentScore === 3) result = "Correct";
            else if (!twoanswers && !threeanswers && currentScore === 1) result = "Correct";

            if (result === "Correct") {
                currentScore = 1;
                if (userSettings.showAnswers) {
                    resultDiv.innerText = "Excellent!";
                    resultDiv.className = "text-center font-bold text-lg text-success h-6 animate-pulse";
                }
            } else {
                currentScore = 0;
                if (userSettings.showAnswers) {
                    resultDiv.innerText = "Keep going, you'll get it!";
                    resultDiv.className = "text-center font-bold text-lg text-error h-6";
                }
            }

            // Show explanation if available in data
            const explanationContainer = document.getElementById('explanation-container');
            const explanationText = document.getElementById('explanation-text');


            if (explanationContainer && explanationText && currentQAll.explanation && userSettings.showAnswers) {
                renderRichText(explanationText, currentQAll.explanation);
                explanationContainer.classList.remove('hidden');
            }

            correct_or_incorrect.push(result);
            totalScore += currentScore;
            currentSelectedAnswersAll.push([...currentSelectedAnswers]);
            currentCorrectAnsArrAll.push([...currentCorrectAnsArr]);

            const isWrong = result === "Wrong";
            const currentQ = questions[questionHistory[currentQuestionIndex]];
            const qId = `${currentQuizId || 'unknown'}_${currentQ.quesiton_id || currentQ.question_id}`;

            if (isWrong && userSettings.showAnswers) {
                nextBtn.classList.add('hidden');
                const feynmanSection = document.getElementById('feynman-section');
                const feynmanTextarea = document.getElementById('feynman-textarea');
                const saveFeynmanBtn = document.getElementById('save-feynman-btn');
                const btnText = saveFeynmanBtn.querySelector('span:not(.material-symbols-outlined)');
                const btnIcon = saveFeynmanBtn.querySelector('.material-symbols-outlined');

                feynmanSection.classList.remove('hidden');
                document.getElementById('feynman-hint').innerText = "Focus on the core concept. Try to simplify the logic behind the correct architecture.";

                // Initial state
                btnText.innerText = "Continue";
                btnIcon.innerText = "arrow_forward";

                feynmanTextarea.oninput = () => {
                    if (feynmanTextarea.value.trim() === "") {
                        btnText.innerText = "Continue";
                        btnIcon.innerText = "arrow_forward";
                    } else {
                        btnText.innerText = "Submit Response";
                        btnIcon.innerText = "done_all";
                    }
                };

                saveFeynmanBtn.onclick = () => {
                    const explanation = feynmanTextarea.value;
                    if (currentQuizId !== 'fun') {
                        getProgress(qId).then(prevData => {
                            const newData = calculateSM2(2, prevData);
                            if (explanation.trim()) {
                                newData.feynman_explanation = explanation;
                            } else if (prevData && prevData.feynman_explanation) {
                                // Keep old explanation if not updated
                                newData.feynman_explanation = prevData.feynman_explanation;
                            }
                            if (typeof saveProgress === 'function') saveProgress(qId, newData);
                        });
                    }

                    feynmanSection.classList.add('hidden');
                    loadNextQuestion();
                };
            } else if (!isWrong && userSettings.showAnswers) {
                // Celebration!
                const randomAccolade = ACCOLADES[Math.floor(Math.random() * ACCOLADES.length)];
                resultDiv.innerText = randomAccolade;
                resultDiv.classList.add('animate-congrats');
                try {
                    if (typeof triggerCelebration === 'function') {
                        triggerCelebration(selectedBtn);
                    }
                } catch (e) {
                    console.error('Celebration failed:', e);
                }

                if (currentQuizId !== 'fun') {
                    getProgress(qId).then(prevData => {
                        const newData = calculateSM2(4, prevData);
                        // Preserve existing feynman notes even on success
                        if (prevData && prevData.feynman_explanation) {
                            newData.feynman_explanation = prevData.feynman_explanation;
                        }
                        if (typeof saveProgress === 'function') saveProgress(qId, newData);
                    });
                }
                setTimeout(loadNextQuestion, 1200);
            } else {
                // If answers are hidden, still save SM-2 but stay silent
                if (currentQuizId !== 'fun') {
                    getProgress(qId).then(prevData => {
                        const quality = isWrong ? 2 : 4;
                        const newData = calculateSM2(quality, prevData);
                        if (prevData && prevData.feynman_explanation) {
                            newData.feynman_explanation = prevData.feynman_explanation;
                        }
                        if (typeof saveProgress === 'function') saveProgress(qId, newData);
                    });
                }
                setTimeout(loadNextQuestion, 400); // Small delay for UX if auto-advancing
            }
        }
    }

    function showScore() {
        resetState();
        quizApp.classList.add('hidden');
        document.getElementById('quiz-progress-container')?.classList.add('hidden');

        const passingScore = Math.ceil(0.7 * questions.length);
        const hasPassed = totalScore >= passingScore;

        showDetails(hasPassed, totalScore, questions.length);
    }

    function resetState() {
        nextBtn.classList.add('hidden');
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
        resultDiv.innerText = "";
        resultDiv.className = "text-center font-bold text-lg text-success h-6";
        resultDiv.classList.remove('animate-congrats');
        twoanswers = false;
        threeanswers = false;
        selectedAnswers = [];
        currentSelectedAnswers = [];
        currentCorrectAnsArr = [];

        // Clear and hide explanation
        const explanationContainer = document.getElementById('explanation-container');
        const explanationText = document.getElementById('explanation-text');
        if (explanationContainer) explanationContainer.classList.add('hidden');
        if (explanationText) explanationText.innerText = '';

        // Clear and hide notes
        const notesContainer = document.getElementById('notes-container');
        const notesContent = document.getElementById('notes-content');
        const toggleIcon = document.getElementById('notes-toggle-icon');
        if (notesContainer) notesContainer.classList.add('hidden');
        if (notesContent) notesContent.classList.add('hidden');
        if (toggleIcon) toggleIcon.style.transform = 'rotate(0deg)';
    }

    function showDetails(hasPassed = null, finalScore = null, maxScore = null) {
        viewResultsBtn.classList.add('hidden');

        const banner = document.getElementById('final-score-banner');
        if (banner && finalScore !== null) {
            banner.classList.remove('hidden');
            const heading = document.getElementById('final-score-heading');
            const subtext = document.getElementById('final-score-subtext');
            if (hasPassed) {
                banner.classList.add('border-success', 'bg-success/10', 'text-success');
                heading.innerText = '🎉 Congratulations! You Passed!';
                subtext.innerText = `You scored ${finalScore} out of ${maxScore}. Great job!`;
                // Simple pulse animation
                banner.classList.add('animate-pulse');
                setTimeout(() => banner.classList.remove('animate-pulse'), 2000);
            } else {
                banner.classList.add('border-error', 'bg-error/10', 'text-error');
                heading.innerText = 'Keep practicing!';
                subtext.innerText = `You scored ${finalScore} out of ${maxScore}. Review the scorecard below to see where you can improve.`;
            }
        }

        const detailsTableBody = document.querySelector('#details-table tbody');
        detailsTableBody.innerHTML = '';

        questionTextArr.forEach((question, index) => {
            const row = document.createElement('tr');
            const isCorrect = correct_or_incorrect[index] === "Correct";
            row.className = `transition-colors border-b border-black/5 ${isCorrect ? 'bg-success/5 hover:bg-success/10' : 'bg-error/5 hover:bg-error/10'}`;

            const currentQAll = questions[questionHistory[index]];

            row.innerHTML = `
                <td class="px-8 py-6">
                    <div class="flex items-start space-x-3">
                        <div class="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isCorrect ? 'bg-success text-white' : 'bg-error text-white'}">
                            <span class="material-symbols-outlined text-[14px] font-bold">${isCorrect ? 'check' : 'close'}</span>
                        </div>
                        <div>
                            <div class="font-bold text-inverse-surface leading-tight mb-1" id="q-text-${index}"></div>
                            <div class="text-[10px] uppercase tracking-wider font-bold opacity-30">Analytical Review</div>
                            <button class="mt-3 text-xs font-bold text-primary flex items-center space-x-1 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors border border-primary/20 copy-ai-btn">
                                <span class="material-symbols-outlined text-[14px]">psychology_alt</span>
                                <span>Ask AI</span>
                            </button>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-6 text-sm">
                    <div class="space-y-1" id="u-ans-${index}"></div>
                </td>
                <td class="px-8 py-6 text-sm text-right">
                    <div class="space-y-1 opacity-60 inline-block text-left" id="c-ans-${index}"></div>
                </td>
            `;

            const qTextElement = row.querySelector(`#q-text-${index}`);
            renderRichText(qTextElement, `${index + 1}. ${question}`);

            const uAnsContainer = row.querySelector(`#u-ans-${index}`);
            currentSelectedAnswersAll[index].forEach(ans => {
                const p = document.createElement('p');
                p.className = "flex items-center space-x-2";
                const dot = document.createElement('span');
                dot.className = `w-1.5 h-1.5 rounded-full ${isCorrect ? 'bg-success' : 'bg-error'}`;
                const text = document.createElement('span');
                text.textContent = ans;
                p.appendChild(dot);
                p.appendChild(text);
                uAnsContainer.appendChild(p);
            });

            const cAnsContainer = row.querySelector(`#c-ans-${index}`);
            currentCorrectAnsArrAll[index].forEach(ans => {
                const p = document.createElement('p');
                p.className = "flex items-center space-x-2";
                const dot = document.createElement('span');
                dot.className = "w-1.5 h-1.5 rounded-full bg-primary";
                const text = document.createElement('span');
                text.textContent = ans;
                p.appendChild(dot);
                p.appendChild(text);
                cAnsContainer.appendChild(p);
            });

            const btn = row.querySelector('.copy-ai-btn');
            btn.onclick = () => {
                const domainCtx = currentQAll.domains && currentQAll.domains.length ? `\nDomain: ${currentQAll.domains.join(', ')}` : '';
                const tagsCtx = currentQAll.tags && currentQAll.tags.length ? `\nTags: ${currentQAll.tags.join(', ')}` : '';

                let expertiseInstruction = "Act as an expert Tutor.";
                if (userSettings.expertiseLevel === 'eli5') {
                    expertiseInstruction = "Act as a friendly tutor and explain this concept like I am five years old, using simple analogies and no technical jargon.";
                } else if (userSettings.expertiseLevel === '18') {
                    expertiseInstruction = "Act as an academic tutor and explain this concept clearly for an 18-year-old student, being direct and educational.";
                } else {
                    expertiseInstruction = "Act as a professional industry expert. Use precise technical terminology and be extremely concise and efficient in your explanation.";
                }

                const prompt = `${expertiseInstruction}${domainCtx}${tagsCtx}\nQuestion: ${question}\n\nOptions:\n${currentQAll.options.map(o => '- ' + o.option_text).join('\n')}\n\nMy Selected Answer: ${currentSelectedAnswersAll[index].join(', ') || 'None'}\nCorrect Answer: ${currentCorrectAnsArrAll[index].join(', ')}\n\nPlease explain clearly and concisely why this is the correct answer based on core concepts and best practices. Do NOT provide follow-up questions, suggested topics, or further conversation hooks. Provide only the explanation content.`;

                navigator.clipboard.writeText(prompt).then(() => {
                    const span = btn.querySelector('span:last-child');
                    const origText = span.innerText;
                    span.innerText = 'Copied!';
                    btn.classList.replace('text-primary', 'text-success');
                    btn.classList.replace('border-primary/20', 'border-success/40');
                    setTimeout(() => {
                        span.innerText = origText;
                        btn.classList.replace('text-success', 'text-primary');
                        btn.classList.replace('border-success/40', 'border-primary/20');
                    }, 2000);
                });
            };

            detailsTableBody.appendChild(row);
        });

        detailsSection.classList.remove('hidden');
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
});

function triggerCelebration(button) {
    const emojis = ['🎉', '✨', '🔥', '⭐', '🚀', '🧠', '✅'];
    const rect = button.getBoundingClientRect();
    const count = 10;

    for (let i = 0; i < count; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random position around the button
        const x = rect.left + (Math.random() * rect.width);
        const y = rect.top + (Math.random() * rect.height);
        
        emoji.style.left = `${x}px`;
        emoji.style.top = `${y}px`;
        
        document.body.appendChild(emoji);
        
        // Cleanup after animation completes
        setTimeout(() => emoji.remove(), 1200);
    }
}
