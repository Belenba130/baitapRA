$(function () {
    $("#header").load("header.html");
});

$(function () {
    $("#footer").load("footer.html");
});
let products = JSON.parse(localStorage.getItem("products"));
const productsContainer = document.getElementById('product1');
const itemPerPage = 3;
let currentPage = 1;
let totalPage = Math.ceil(products.length / itemPerPage);

function displayProducts() {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);

    productsContainer.innerHTML = '';

    displayedProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-6', 'col-lg-4', 'wow', 'fadeInUp');

        productItem.innerHTML = `
            <div class="service-item">
                <div class="overflow-hidden">
                    <img class="img-fluid" src="${product.image}" alt="${product.name}">
                </div>
                <div class="p-4 text-center border border-5 border-light border-top-0">
                    <h4 class="mb-3">${product.name}</h4>
                    <p>Giá: ${product.price} VND</p>
                    <p>${product.description}</p>
                    <div>
                    <i class="fa-solid fa-heart fa-lg" style="cursor: pointer;"></i>
                    <i class="fa-solid fa-cart-shopping fa-lg" style="cursor: pointer;"></i>
                    </div>
                </div>
            </div>
        `;

        productsContainer.appendChild(productItem);
    });
}

function showListPage() {
    let text = "";
    for (let i = 1; i <= totalPage; i++) {
        text +=
            `<li class="page-link "onclick="choosePage(${i})">${i}</li>`;
    }
    document.getElementsByClassName("list-page")[0].innerHTML =
    `
  <span  onclick="prePage()" class="page-link"  >Previous
  </span>
    ${text}
    <span onclick="nextPage()" class="page-link">Next
    </span>
`
}

function choosePage(page) {
    currentPage = page;
    displayProducts();
}

function nextPage() {
    if (currentPage < totalPage) {
        currentPage++;
        displayProducts();
    }
}

function prePage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
}

displayProducts();
showListPage();



let searchTimer;

function delayedSearch() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(searchProduct, 2000);
}
function searchProduct() {
    let searchName = document.getElementById("search").value.toLowerCase();
    let result = products.filter(item =>
        item.name.toLowerCase().includes(searchName)
    );

    totalPage = Math.ceil(result.length / itemPerPage);
    currentPage = 1;

    showListPage();
    displayFilteredProducts(result);
}

function displayFilteredProducts(filteredProducts) {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, endIndex);

    productsContainer.innerHTML = '';

    displayedProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('col-md-6', 'col-lg-4', 'wow', 'fadeInUp');

        productItem.innerHTML = `
        <div class="service-item">
        <div class="overflow-hidden">
            <img class="img-fluid" src="${singleProduct.image}" alt="${singleProduct.name}">
        </div>
        <div class="p-4 text-center border border-5 border-light border-top-0">
            <h4 class="mb-3">${singleProduct.name}</h4>
            <p>Giá: ${singleProduct.price} VND</p>
            <p>${singleProduct.description}</p>
            <div>
            <i class="fa-solid fa-heart fa-lg" style="cursor: pointer;"></i>
            <i class="fa-solid fa-cart-shopping fa-lg" onclick = "addToCart()"  style="cursor: pointer;"></i>
            </div>
        </div>
    </div>
        `;

        productsContainer.appendChild(productItem);
    });
}

function addToCart(productId) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUserID = localStorage.getItem("idUser");

    let productToAdd = products.find(product => product.id === productId);
    if (!productToAdd) {
        console.error("Sản phẩm không tồn tại");
        return;
    }

    // Tìm người dùng hiện tại
    let currentUser = users.find(user => user.id === currentUserID);
    if (!currentUser) {
        console.error("Người dùng không tồn tại");
        return;
    }

    currentUser.cart = currentUser.cart || [];
    currentUser.cart.push(productToAdd);
    let updatedUsers = users.map(user => {
        if (user.id === currentUserID) {
            return currentUser;
        }
        return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
}


