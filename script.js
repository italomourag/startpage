document.querySelectorAll('.link').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = '1';
        setTimeout(() => {
            const url = link.href;
            const redirectUrl = `redirect.html?url=${encodeURIComponent(url)}`;
            window.open(redirectUrl, '_blank');
            overlay.style.opacity = '0';
        }, 300);
    });
});

const toggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    toggle.innerHTML = theme === 'dark' ? '&#xf185;' : '&#xf186;';
}

const params = new URLSearchParams(window.location.search);
const saved = params.get('theme') || localStorage.getItem('theme') || 'light';

toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
});
