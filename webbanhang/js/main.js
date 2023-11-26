$(function () {
    $("#header").load("header.html");
});

$(function () {
    $("#footer").load("footer.html");
});


let products = [
    {
        name: "Tăm Tre 1",
        price: 20000,
        image: "img/1487301712012_6233710.jpg",
        id: 100,
        description: "",
        stock: 50,
    },
    {
        name: "Tăm tre 2",
        price: 50000,
        image: "img/6e516cbc567767cff13cb7a363c8f4a1.jpg",
        id: 101,
        description: "",
        stock: 50,
    },
    {
        name: "Tăm tre 3",
        price: 30000,
        image: "img/e9dda3eaa02894beffa83c3963b0f11f.jpg",
        id: 102,
        description: "",
        stock: 50,
    },
    {
        name: "Nón Lá 1",
        price: 50000,
        image: "img/nónlá1.jpg",
        id: 103,
        description: "",
        stock: 50,
    },
    {
        name: "Nón Lá 2",
        price: 70000,
        image: "img/nónlá3.jpg",
        id: 104,
        description: "",
        stock: 50,
    },
    {
        name: "Đũa Tre 1",
        price: 20000,
        image: "img/đũatre1.jpg",
        id: 105,
        description: "",
        stock: 50,
    },
    {
        name: "Đũa Tre 2",
        price: 40000,
        image: "img/đũatre2.jpg",
        id: 106,
        description: "",
        stock: 50,
    },
    {
        name: "Nhang Thơm 1",
        price: 50000,
        image: "img/nahng1.jpg",
        id: 107,
        description: "",
        stock: 50,
    },
    {
        name: "Nhang Thơm 2",
        price: 80000,
        image: "img/nhang2.jpg",
        id: 108,
        description: "",
        stock: 50,
    },
]



localStorage.setItem("products", JSON.stringify(products));

const product = JSON.parse(localStorage.getItem("products"));

const productsContainer = document.getElementById('product2');



console.log(productsContainer);
function displayProducts(products, container) {
    products.forEach(singleProduct => {
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
                        <a><i class="fa-solid fa-heart fa-lg" style="cursor: pointer;"></i></a>
                        <a><i class="fa-solid fa-cart-shopping fa-lg" onclick="addToCart(${singleProduct.id})" style="cursor: pointer;"></i></a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(productItem);
    });
}

displayProducts(products, productsContainer);

function addToCart(idProduct) {
    let checkLogin = localStorage.getItem("idUser");
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let products = JSON.parse(localStorage.getItem("products")) || [];

    if (!checkLogin) {
        console.log("Vui lòng đăng nhập để mua hàng");
        return;
    }

    let currentUser = users.find(user => user.id == checkLogin);

    if (!currentUser) {
        console.log("Người dùng không tồn tại");
        return;
    }

    let productToAdd = products.find(product => product.id == idProduct);

    if (!productToAdd) {
        console.log("Sản phẩm không tồn tại");
        return;
    }
    let existingProductIndex = currentUser.cart.findIndex(item => item.id == idProduct);

    if (existingProductIndex !== -1) {
        currentUser.cart[existingProductIndex].quantity++;
    } else {
        currentUser.cart.push({ ...productToAdd, quantity: 1 });
    }
    localStorage.setItem("users", JSON.stringify(users));
}
