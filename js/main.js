const slider = document.querySelector(".slider");
const nextbtn = document.querySelector(".fa-chevron-right");
const prevbtn = document.querySelector(".fa-chevron-left");
const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".btn");
const numberofslides = slides.length;

var slidenumber = 0;
var playslider;

// Tự động chuyển slides
var repeat = () => {
    playslider = setInterval(function () {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        buttons.forEach((button) => {
            button.classList.remove("active");
        });

        slidenumber++;

        if (slidenumber > (numberofslides - 1)) {
            slidenumber = 0;
        }
        slides[slidenumber].classList.add("active");
        buttons[slidenumber].classList.add("active");
    }, 60000);
}
repeat();

// Slide tiếp theo khi nhấn vào các nút ở bên dưới
buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {

        slidenumber = i;

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });

        slides[slidenumber].classList.add('active');
        buttons[slidenumber].classList.add('active');
    });
});

// Slide tiếp theo khi nhấn chevron-right
nextbtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    slidenumber++;

    if (slidenumber > (numberofslides - 1)) {
        slidenumber = 0;
    }
    slides[slidenumber].classList.add("active");
    buttons[slidenumber].classList.add("active");
});

// Slide tiếp theo khi nhấn chevron-left
prevbtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    slidenumber--;

    if (slidenumber < 0) {
        slidenumber = numberofslides - 1;
    }
    slides[slidenumber].classList.add("active");
    buttons[slidenumber].classList.add("active");
});

// Khi cuộn xuống thì thanh top-header sẽ nảy từ thanh công cụ của trình duyệt ra
window.addEventListener('scroll', function () {
    const header = document.querySelector('.list-item');
    const topHeader = document.querySelector('.top-header');
    if (window.scrollY > 50) {
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
