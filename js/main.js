const slider = document.querySelector(".slider");
const nextbtn = document.querySelector(".fa-chevron-right");
const prevbtn = document.querySelector(".fa-chevron-left");
const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".btn");
const numberofslides = slides.length;

let slidenumber = 0;
let playslider;

// Tự động chuyển slides
let repeat = () => {
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

// Hiển thị nội dung động, đổ dữ liệu ra HTML (Dynamic UI Rendering)
function renderProductList() {
    let productListDom = document.getElementById("productList");
    let html = "";

    productList.forEach(product => {
        html += `
        <div class="col-md-3">
            <div class="product-item">
                <div class="product-hover">
                    ${product.isHot ? '<div class="label"><a href="" class="hot">Hot</a></div>' : ''}
                    ${product.isNew ? '<div class="label"><a href="" class="new">New</a></div>' : ''}
                    <a href="./page/product-detail.html">
                        <img class="product-img" src="${product.image}" alt="${product.name}" />
                    </a>
                    <ul class="menu-hover">
                        <li class="menu-item">
                            <a href="" class="menu-link"><i class="fa-solid fa-shuffle"></i></a>
                        </li>
                        <li class="menu-item">
                            <a href="" class="menu-link"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </li>
                        <li class="menu-item">
                            <a href="" class="menu-link"><i class="fa-regular fa-heart"></i></a>
                        </li>
                    </ul>
                    <a href="">
                        <div class="btn-cart">Add to Cart</div>
                    </a>
                </div>
                <div class="product-info">
                    <h3 class="product-name">
                        <a href="">${product.name}</a>
                    </h3>
                    <span class="product-category">
                        <a href="">${product.category}</a>
                    </span>
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>`
    });
    productListDom.innerHTML = html;
}

function renderPopProductList() {
    let productListDom = document.getElementById("popProductList");
    let html = "";

    popProductList.forEach(product => {
        html += `<div class="col-md-3">
      <div class="pop-product">
        <div class="pop-product-hover">
        ${product.isHot ? '<div class="label"><a href="" class="hot">Hot</a></div>' : ''}
        ${product.isNew ? '<div class="label"><a href="" class="new">New</a></div>' : ''}
          <a href="">
            <img class="product-img" src="${product.image}" alt="${product.name}"/>
          </a>
          <ul class="menu-hover">
            <li class="menu-item">
              <a href="" class="menu-link">
                <i class="fa-solid fa-shuffle"></i>
              </a>
            </li>
            <li class="menu-item">
              <a href="" class="menu-link">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li class="menu-item">
              <a href="" class="menu-link">
                <i class="fa-regular fa-heart"></i>
              </a>
            </li>
          </ul>
          <a href="">
            <div class="btn-cart">Add to Cart</div>
          </a>
        </div>
        <div class="pop-product-info">
          <h3 class="pop-product-name">
            <a href="">${product.name}</a>
          </h3>
          <span class="pop-product-category">
            <a href="">${product.category}</a>
          </span>
          <span class="pop-product-price">$${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>`
        // toFixed(2) ở phẩn product.price để ép giá trị thành chuỗi với chính xác 2 chữ số sau dấu phẩy, bất kể số đó có phần thập phân hay không
    });
    productListDom.innerHTML = html;
}

renderProductList();
renderPopProductList();