const loginBtn = document.getElementById("loginBtn");
const overlay = document.getElementById("overlay");
// MỞ bảng
loginBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
});

// ĐÓNG khi click ra ngoài
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});

const registerBtn = document.getElementById("login-box");
registerBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

// ===== COUNTDOWN FLASH SALE =====
function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let ampm = hours >= 12 ? "PM" : "AM";

    // đổi sang 12h
    hours = hours % 12;
    hours = hours ? hours : 12;

    // thêm số 0
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("clock").textContent =
        `${hours}:${minutes} ${ampm}`;
}

// chạy ngay lập tức
updateClock();

// cập nhật mỗi giây
setInterval(updateClock, 1000);

// ===== CLOCK (GIỜ THỰC) =====
function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("clock").textContent =
        `${hours}:${minutes} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();


// ===== COUNTDOWN FLASH SALE =====
let time = 60;

function updateCountdown() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    document.getElementById("countdown").textContent =
        `${hours}:${minutes < 10 ? "0"+minutes : minutes}:${seconds < 10 ? "0"+seconds : seconds}`;

    if (time <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").textContent = alert("⏰hết giờ");
    }

    time--;
}

let timer = setInterval(updateCountdown, 1000);

// ===== DANH SÁCH SẢN PHẨM =====
const products = [
    {
        name: "Laptop Gaming",
        price: "25,000,000 VND",
        image: "https://via.placeholder.com/180x120?text=Laptop+Gaming",
        discount: "-20%",
        rating: "⭐⭐⭐⭐⭐",
        description: "Laptop gaming cao cấp với card đồ họa RTX 4060"
    },
    {
        name: "Điện thoại thông minh",
        price: "15,000,000 VND",
        image: "https://via.placeholder.com/180x120?text=Smartphone",
        discount: "-15%",
        rating: "⭐⭐⭐⭐",
        description: "Smartphone flagship với camera 108MP"
    },
    {
        name: "Tai nghe Bluetooth",
        price: "2,500,000 VND",
        image: "https://via.placeholder.com/180x120?text=Headphones",
        discount: "-10%",
        rating: "⭐⭐⭐⭐⭐",
        description: "Tai nghe không dây với âm thanh chất lượng cao"
    },
    {
        name: "Máy ảnh DSLR",
        price: "30,000,000 VND",
        image: "https://via.placeholder.com/180x120?text=DSLR+Camera",
        discount: "-25%",
        rating: "⭐⭐⭐⭐",
        description: "Máy ảnh chuyên nghiệp cho nhiếp ảnh gia"
    },
    {
        name: "Bàn phím cơ",
        price: "3,000,000 VND",
        image: "https://via.placeholder.com/180x120?text=Mechanical+Keyboard",
        discount: "-5%",
        rating: "⭐⭐⭐⭐⭐",
        description: "Bàn phím cơ RGB với switch Cherry MX"
    }
];

function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Xóa nội dung cũ

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="discount">${product.discount}</div>
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <p class="rating">${product.rating}</p>
        `;

        productList.appendChild(productDiv);
    });
}

// Gọi hàm hiển thị sản phẩm khi trang load
window.addEventListener("load", displayProducts);

// ===== TÌM KIẾM SẢN PHẨM =====
const searchInput = document.getElementById("search");
const notfound = document.getElementById("notfound");

searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase().trim();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    displayProducts(filteredProducts);

    if (filteredProducts.length === 0 && query !== "") {
        notfound.textContent = "Không tìm thấy sản phẩm nào phù hợp.";
    } else {
        notfound.textContent = "";
    }
});

function displayProducts(productsToDisplay = products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Xóa nội dung cũ

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="discount">${product.discount}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-details">
                    <p class="price">${product.price}</p>
                    <p class="rating">${product.rating}</p>
                </div>
                <button class="buy-btn">Mua ngay</button>
            </div>
        `;

        productList.appendChild(productDiv);
    });
}