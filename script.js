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