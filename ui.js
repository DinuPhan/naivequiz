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

if (typeof mainTitle !== 'undefined' && mainTitle) {
    if (typeof observer !== 'undefined') {
        observer.observe(mainTitle, { childList: true });
    }
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
