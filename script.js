document.addEventListener('DOMContentLoaded', () => {
    const answerButtons = document.getElementById('answer-buttons');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const quizApp = document.getElementById('quiz-app');
    const introSection = document.getElementById('intro-section');
    const resultDiv = document.getElementById('result');
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

    let currentSelectedAnswers = [];
    let currentSelectedAnswersAll = [];
    
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
            const targetQuizId = parseInt(urlParams.get('id')) || 1;

            const transaction = db.transaction(['questions'], 'readonly');
            const store = transaction.objectStore('questions');
            const request = store.getAll();
            
            request.onsuccess = () => {
                const allData = request.result;
                questions = allData.filter(q => q.quiz_id == targetQuizId);
                currentQuizId = targetQuizId;
                
                if (questions.length === 0) {
                    const titleElem = document.getElementById('quiz-title');
                    if (titleElem) titleElem.innerText = "Quiz not found!";
                    if (introSection) introSection.classList.remove('hidden');
                    return reject("No questions found for this ID");
                }

                const quizTitle = questions[0].quiz_title || "Quiz " + targetQuizId;
                const totalQuestions = questions.length;
                const passingMarks = Math.ceil(totalQuestions * 0.7); 

                // Update UI
                if (document.getElementById('page-title')) document.getElementById('page-title').innerText = quizTitle;
                if (document.getElementById('quiz-title')) document.getElementById('quiz-title').innerText = quizTitle;
                if (document.getElementById('quiz-question-count')) document.getElementById('quiz-question-count').innerText = totalQuestions;
                if (document.getElementById('quiz-total-marks')) document.getElementById('quiz-total-marks').innerText = totalQuestions;
                if (document.getElementById('quiz-passing-marks')) document.getElementById('quiz-passing-marks').innerText = passingMarks;

                if (introSection) introSection.classList.remove('hidden');

                resolve();
            };
            request.onerror = (e) => reject(e.target.error);
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
                        loadNextQuestion();
                    });
                }
            })
            .catch(error => console.error('Error loading quiz data:', error));
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
        feynmanSection.classList.add('hidden');
        document.getElementById('feynman-textarea').value = '';

        currentScore = 0;
        document.getElementById('question_no').innerText = `Question ${currentQuestionIndex + 1}`;
        document.getElementById('question').innerText = question.question_text;
        questionTextArr.push(question.question_text);

        const labels = ['A', 'B', 'C', 'D', 'E', 'F'];

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "group w-full min-h-[64px] flex items-center px-6 py-4 rounded-3xl border-2 border-surface-container-highest bg-white hover:border-primary/40 hover:bg-primary/5 transition-all text-left space-x-4 animate-in fade-in slide-in-from-bottom-2 duration-300";
            button.style.animationDelay = `${index * 100}ms`;
            
            button.innerHTML = `
                <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface-variant font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all uppercase text-sm">${labels[index] || index + 1}</span>
                <span class="flex-1 text-sm font-medium leading-relaxed">${option.option_text}</span>
            `;
            
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

        let questionComplete = false;
        if (twoanswers && selectedAnswers.length === 2) questionComplete = true;
        else if (threeanswers && selectedAnswers.length === 3) questionComplete = true;
        else if (!twoanswers && !threeanswers && selectedAnswers.length === 1) questionComplete = true;

        if (questionComplete) {
            // Disable all other buttons
            Array.from(answerButtons.children).forEach(button => {
                button.disabled = true;
                // Reveal correct answers if not already selected
                if (button.dataset.correct === "true" && !button.classList.contains('border-success')) {
                    button.classList.replace('border-surface-container-highest', 'border-success/40');
                    button.children[0].classList.replace('bg-surface-container-highest', 'bg-success/40');
                }
            });

            let result = "Wrong";
            if (twoanswers && currentScore === 2) result = "Correct";
            else if (threeanswers && currentScore === 3) result = "Correct";
            else if (!twoanswers && !threeanswers && currentScore === 1) result = "Correct";

            if (result === "Correct") {
                currentScore = 1;
                resultDiv.innerText = "Excellent!";
                resultDiv.className = "text-center font-bold text-lg text-success h-6 animate-pulse";
            } else {
                currentScore = 0;
                resultDiv.innerText = "Keep going, you'll get it!";
                resultDiv.className = "text-center font-bold text-lg text-error h-6";
            }

            correct_or_incorrect.push(result);
            totalScore += currentScore;
            currentSelectedAnswersAll.push([...currentSelectedAnswers]);
            currentCorrectAnsArrAll.push([...currentCorrectAnsArr]);
            
            const isWrong = result === "Wrong";
            const currentQ = questions[questionHistory[currentQuestionIndex]];
            const qId = `${currentQuizId || 'unknown'}_${currentQ.quesiton_id || currentQ.question_id}`;

            if (isWrong) {
                nextBtn.classList.add('hidden');
                const feynmanSection = document.getElementById('feynman-section');
                feynmanSection.classList.remove('hidden');
                document.getElementById('feynman-hint').innerText = "Focus on the core concept. Try to simplify the logic behind the correct architecture.";

                document.getElementById('save-feynman-btn').onclick = () => {
                    const explanation = document.getElementById('feynman-textarea').value;
                    getProgress(qId).then(prevData => {
                        const newData = calculateSM2(2, prevData);
                        if (typeof saveProgress === 'function') saveProgress(qId, newData);
                    });

                    feynmanSection.classList.add('hidden');
                    nextBtn.classList.remove('hidden');
                };
            } else {
                getProgress(qId).then(prevData => {
                    const newData = calculateSM2(4, prevData);
                    if (typeof saveProgress === 'function') saveProgress(qId, newData);
                });
                nextBtn.classList.remove('hidden');
            }
        }
    }

    function showScore() {
        resetState();
        quizApp.classList.add('hidden');
        document.getElementById('quiz-progress-container')?.classList.add('hidden');
        
        const passingScore = Math.ceil(0.7 * questions.length);
        const hasPassed = totalScore >= passingScore;
        
        // Show view results button instead of immediate list
        viewResultsBtn.classList.remove('hidden');
        viewResultsBtn.onclick = showDetails;

        // Custom restart logic on nextBtn if we want to reuse it
        nextBtn.innerHTML = `<span>Retake Quiz</span><span class="material-symbols-outlined">restart_alt</span>`;
        nextBtn.classList.remove('hidden');
        nextBtn.onclick = () => window.location.reload();
        
        resultDiv.innerText = hasPassed ? `PASSED! You scored ${totalScore}/${questions.length}` : `FAILED. You scored ${totalScore}/${questions.length}`;
        resultDiv.className = `text-center font-headline font-extrabold text-2xl h-auto py-8 ${hasPassed ? 'text-success' : 'text-error'}`;
    }

    function resetState() {
        nextBtn.classList.add('hidden');
        resultDiv.innerText = "";
        resultDiv.className = "";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
        twoanswers = false;
        threeanswers = false;
        selectedAnswers = [];
        currentSelectedAnswers = [];
        currentCorrectAnsArr = [];
    }

    function showDetails() {
        viewResultsBtn.classList.add('hidden');
        const detailsTableBody = document.querySelector('#details-table tbody');
        detailsTableBody.innerHTML = '';
    
        questionTextArr.forEach((question, index) => {
            const row = document.createElement('tr');
            row.className = "hover:bg-surface/50 transition-colors";
            
            const isCorrect = correct_or_incorrect[index] === "Correct";
            
            row.innerHTML = `
                <td class="px-8 py-6">
                    <div class="font-bold text-inverse-surface leading-tight mb-1">${index + 1}. ${question}</div>
                    <div class="text-[10px] uppercase tracking-wider font-bold opacity-30">Analytical Review</div>
                </td>
                <td class="px-6 py-6 text-sm">
                    <div class="space-y-1">${currentSelectedAnswersAll[index].map(ans => `<p class="flex items-center space-x-2"><span class="w-1.5 h-1.5 rounded-full ${isCorrect ? 'bg-success' : 'bg-error'}"></span><span>${ans}</span></p>`).join('')}</div>
                </td>
                <td class="px-6 py-6 text-sm">
                    <div class="space-y-1 opacity-60">${currentCorrectAnsArrAll[index].map(ans => `<p class="flex items-center space-x-2"><span class="w-1.5 h-1.5 rounded-full bg-primary"></span><span>${ans}</span></p>`).join('')}</div>
                </td>
                <td class="px-8 py-6 text-right">
                    <span class="inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isCorrect ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}">
                        ${correct_or_incorrect[index]}
                    </span>
                </td>
            `;
            detailsTableBody.appendChild(row);
        });
    
        detailsSection.classList.remove('hidden');
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
});
