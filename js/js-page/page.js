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

// Hàm lọc và cập nhật danh sách kết quả tìm kiếm
function filterProducts(query) {
    const queryLower = query.toLowerCase().trim();

    if (queryLower.length < 3) {
        renderProductList([]);
        return;
    }

    const filteredProducts = productList.filter(product => {
        const keywords = queryLower.split(/\s+/);
        return keywords.every(keyword => {
            return product.name.toLowerCase().includes(keyword) ||
                product.category.toLowerCase().includes(keyword);
        });
    });
    renderProductList(filteredProducts);
}

// Hàm đổ dữ liệu danh sách sản phẩm vào trang
function renderProductList(productList) {
    const productListDom = document.getElementById("productList");
    let html = "";
    const maxProducts = 18;

    if (productList.length === 0) {
        html = "";
    } else {
        const productsToRender = productList.slice(0, maxProducts);
        productsToRender.forEach(product => {
            html += `<div class="col-md-2">
                <div class="product-item">
                    <div class="product-hover">
                        <a href="./product-detail.html">
                            <img class="product-img" src="${product.image}" alt="${product.name}" />
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
    }
    productListDom.innerHTML = html;
}

// Lắng nghe sự kiện nhập liệu trong ô tìm kiếm
document.querySelector('.search-input').addEventListener('input', function (e) {
    const query = e.target.value;
    filterProducts(query);
});