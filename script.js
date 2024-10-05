document.querySelectorAll('.link').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const overlay = document.getElementById('overlay');
        overlay.style.opacity = '1';

        setTimeout(() => {
            window.open(link.href, '_blank');
            overlay.style.opacity = '0';
        }, 300);
    });
});
