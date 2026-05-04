// Sidebar Initialization
const toggleBtn = document.getElementById('sidebar-toggle');
const closeBtn = document.getElementById('sidebar-close');
const overlay = document.getElementById('sidebar-overlay');
const body = document.body;

function loadSidebarState() {
    const isExpanded = localStorage.getItem('sidebarExpanded') === 'true';
    if (window.innerWidth >= 1024 && isExpanded) {
        body.classList.add('sidebar-expanded');
    }
}

function toggleSidebar() {
    body.classList.toggle('sidebar-expanded');
    if (window.innerWidth >= 1024) {
        localStorage.setItem('sidebarExpanded', body.classList.contains('sidebar-expanded'));
    }
}

// Swipe Gestures for Mobile Sidebar
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    const SWIPE_THRESHOLD = 50;
    const EDGE_THRESHOLD = 30; // pixels from left edge to start swipe-open
    const isExpanded = body.classList.contains('sidebar-expanded');

    if (touchEndX < touchStartX - SWIPE_THRESHOLD && isExpanded) {
        // Swipe left to close
        body.classList.remove('sidebar-expanded');
    } else if (touchEndX > touchStartX + SWIPE_THRESHOLD && !isExpanded && touchStartX <= EDGE_THRESHOLD) {
        // Swipe right from the left edge to open
        body.classList.add('sidebar-expanded');
    }
}

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

toggleBtn?.addEventListener('click', toggleSidebar);
closeBtn?.addEventListener('click', () => body.classList.remove('sidebar-expanded'));
overlay?.addEventListener('click', () => body.classList.remove('sidebar-expanded'));

loadSidebarState();

initDB()
    .then(() => checkAndLoadInitialData())
    .then(() => renderNavbar())
    .then(() => renderQuizShortcuts())
    .then(() => console.log('DB Ready'))
    .catch(console.error);

const loadCustomBtn = document.getElementById('loadCustomBtn');
const fileInput = document.getElementById('customDataInput');
const uploadStatus = document.getElementById('uploadStatus');

loadCustomBtn.addEventListener('click', () => {
    if (fileInput.files.length === 0) {
        uploadStatus.innerText = "Please select a file first";
        uploadStatus.className = "text-center text-sm font-medium text-red-500";
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            let data;
            if (file.name.endsWith('.md')) {
                // Markdown Import
                data = parseMarkdownQuiz(e.target.result);
                console.log("Parsed Markdown Data:", data);
            } else {
                // JSON Import
                data = JSON.parse(e.target.result);
            }

            importQuizData(data).then(count => {
                uploadStatus.innerText = `Successfully loaded ${count} questions!`;
                uploadStatus.className = "text-center text-sm font-medium text-primary";
                renderNavbar();
                renderQuizShortcuts();
            }).catch(err => {
                uploadStatus.innerText = `DB Error: ${err}`;
                uploadStatus.className = "text-center text-sm font-medium text-red-500";
            });
        } catch (err) {
            console.error("Import Error:", err);
            uploadStatus.innerText = "Format Error: " + err.message;
            uploadStatus.className = "text-center text-sm font-medium text-red-500";
        }
    };
    reader.readAsText(file);
});

// UI Feedback for file selection
fileInput.addEventListener('change', (e) => {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
        document.querySelector('label[for="customDataInput"] span').innerText = fileName;
        document.querySelector('label[for="customDataInput"]').classList.add('border-primary/40', 'bg-primary/5');
    }
});

// Quiz Architect Copy Feature
const copyBtn = document.getElementById('copyPromptBtn');
const copyText = document.getElementById('copyText');
const copyIcon = document.getElementById('copyIcon');
const successBg = document.getElementById('copySuccessBg');
const promptTemplate = document.getElementById('prompt-template');

if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const text = promptTemplate.innerText.trim();
        navigator.clipboard.writeText(text).then(() => {
            // Success State
            copyText.innerText = 'Copied for NotebookLM!';
            copyIcon.innerText = 'check_circle';
            successBg.classList.replace('translate-y-full', 'translate-y-0');
            copyBtn.classList.add('scale-[0.98]');

            setTimeout(() => {
                copyText.innerText = 'Copy Template for NotebookLM';
                copyIcon.innerText = 'content_copy';
                successBg.classList.replace('translate-y-0', 'translate-y-full');
                copyBtn.classList.remove('scale-[0.98]');
            }, 2000);
        });
    });
}

const copyFineTuneBtn = document.getElementById('copyFineTuneBtn');
const copyFineTuneText = document.getElementById('copyFineTuneText');
const copyFineTuneIcon = document.getElementById('copyFineTuneIcon');
const copyFineTuneSuccessBg = document.getElementById('copyFineTuneSuccessBg');

const FINE_TUNE_PROMPT = `Act as an Expert Content Auditor and JSON Engineer. 

Goal: Process the provided quiz JSON and verify it against the attached source material (notebook sources).

Correction Protocol:
1. Schema & Typos: Rename 'quesiton_id' to 'question_id' if found.
2. Grounded Truth Check: Verify that the 'correct_answer_id' is factually accurate according to the sources. If incorrect, update it.
3. Logical Consistency (Strict Rules):
   - If 'question_text' contains "(Select TWO)", 'correct_answer_id' MUST be an array of exactly 2 unique IDs. Find the two most accurate options if they aren't already marked.
   - If only 1 correct answer is found in sources for a "Select TWO" question, generate a new correct option that is factually accurate.
4. Explanations (MANDATORY): Ensure every question has an 'explanation' field. 
   - The explanation must provide the rationale for the correct answer(s).
   - Use technical language from the source.
5. Consistency: Ensure all 'option_id' values are integers and sequential within each question.

Format Constraints (CRITICAL):
- Return ONLY the corrected raw JSON block.
- No introductory text, no markdown code blocks, and NO "Suggested topics" or "Follow-up questions".
- Stop the output immediately at the end of the JSON structure.
- Preserve the overall 'quizzes' structure.`;

if (copyFineTuneBtn) {
    copyFineTuneBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(FINE_TUNE_PROMPT).then(() => {
            // Success State
            copyFineTuneText.innerText = 'Copied!';
            copyFineTuneIcon.innerText = 'check_circle';
            copyFineTuneSuccessBg.classList.replace('translate-y-full', 'translate-y-0');
            copyFineTuneBtn.classList.replace('text-primary', 'text-white');
            copyFineTuneBtn.classList.add('scale-[0.98]');

            setTimeout(() => {
                copyFineTuneText.innerText = 'Copy Fine-Tuner';
                copyFineTuneIcon.innerText = 'auto_fix_high';
                copyFineTuneSuccessBg.classList.replace('translate-y-0', 'translate-y-full');
                copyFineTuneBtn.classList.replace('text-white', 'text-primary');
                copyFineTuneBtn.classList.remove('scale-[0.98]');
            }, 2000);
        });
    });
}

// Logo Light Bulb Toggle Logic
const heroLogo = document.getElementById('hero-logo');
const modeBadge = document.getElementById('mode-badge');
const modeDot = document.getElementById('mode-dot');
const modeText = document.getElementById('mode-text');

let isModeOn = false;

if (heroLogo) {
    heroLogo.onclick = () => {
        isModeOn = !isModeOn;

        if (isModeOn) {
            heroLogo.src = 'img/logo_on.png';
            modeText.innerText = 'Naive mode: ON';
            modeBadge.classList.replace('bg-primary-container/30', 'bg-primary');
            modeBadge.classList.replace('border-primary/20', 'border-primary/40');
            modeDot.classList.replace('bg-primary', 'bg-white');
            modeText.classList.replace('text-primary', 'text-white');
        } else {
            heroLogo.src = 'img/logo.png';
            modeText.innerText = 'Naive mode: OFF';
            modeBadge.classList.replace('bg-primary', 'bg-primary-container/30');
            modeBadge.classList.replace('border-primary/40', 'border-primary/20');
            modeDot.classList.replace('bg-white', 'bg-primary');
            modeText.classList.replace('text-white', 'text-primary');
        }
    };
}

// Sidebar Search Logic
const searchInput = document.getElementById('sidebar-search');
const clearBtn = document.getElementById('clear-search');

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const handleSearch = debounce((e) => {
    const query = e.target.value;
    renderNavbar(query);
    
    if (query.trim()) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
}, 150);

searchInput?.addEventListener('input', handleSearch);

clearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    renderNavbar('');
    searchInput.focus();
});
