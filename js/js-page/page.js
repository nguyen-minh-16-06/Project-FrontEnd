// Khi cuộn xuống thì thanh top-header sẽ nảy từ thanh công cụ của trình duyệt ra
window.addEventListener('scroll', function () {
    const header = document.querySelector('.hd-wrap');
    const topHeader = document.querySelector('.top-header');
    if (window.scrollY > 30) {
        if (!header.classList.contains('scrolled')) {
            header.classList.add('abounce');
            setTimeout(() => {
                header.classList.remove('abounce');
                header.classList.add('scrolled');
                topHeader.style.height = '60px';
            }, 200);
        }
    } else {
        header.classList.remove('scrolled');
        topHeader.style.height = '90px';
        header.style.backgroundColor = '';
    }
});

// Hiện nút lên đầu trang khi kéo xuống quá 50px
window.addEventListener('scroll', function () {
    const goTopButton = document.querySelector('.go-top-btn');
    if (window.scrollY > 50) {
        goTopButton.classList.add('visible');
    } else {
        goTopButton.classList.remove('visible');
    }
});