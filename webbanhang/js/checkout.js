const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

let checkLogin = localStorage.getItem("idUser");
let users = JSON.parse(localStorage.getItem("users")) || [];

function cart() {
    let currentUser = users.find(user => user.id == checkLogin);

    if (currentUser) {
        let text = "";
        let pay = 0;

        for (let index = 0; index < currentUser.cart.length; index++) {
            pay += +currentUser.cart[index].quantity * currentUser.cart[index].price;
            text +=
                `
                <tr>
                    <td> ${index + 1}</td>
                    <td> ${currentUser.cart[index].name}</td>
                    <td><img src=${currentUser.cart[index].image}> </td>
                    <td> ${VND.format(currentUser.cart[index].price)}</td>
                    <td> 
                    <button type="button" class="btn btn-primary btn-sm" onclick="decrease(${currentUser.cart[index].id})">-</button>
                    ${currentUser.cart[index].quantity}
                    <button type="button" class="btn btn-primary btn-sm" onclick="increase(${currentUser.cart[index].id})">+</button>
                    </td>
                    <td> ${VND.format(currentUser.cart[index].quantity * currentUser.cart[index].price)} </td>
                    <td> <button type="button" class="btn btn-outline-danger" onclick="removeProduct(${currentUser.cart[index].id})">Delete</button> </td>
                </tr>
            `;
        }

        document.getElementById("tbody").innerHTML = text;
        document.getElementsByClassName("pay")[0].innerHTML = VND.format(pay);
    }
}
cart();
function decrease(idProduct) {
    let currentUser = users.find(user => user.id == checkLogin);

    if (currentUser) {
        let productIndex = currentUser.cart.findIndex(product => product.id == idProduct);
        if (productIndex !== -1 && currentUser.cart[productIndex].quantity > 1) {
            currentUser.cart[productIndex].quantity--;
            localStorage.setItem("users", JSON.stringify(users));
            cart();
        }
    }
}

function increase(idProduct) {
    let currentUser = users.find(user => user.id == checkLogin);

    if (currentUser) {
        let productIndex = currentUser.cart.findIndex(product => product.id == idProduct);
        if (productIndex !== -1) {
            currentUser.cart[productIndex].quantity++;
            localStorage.setItem("users", JSON.stringify(users));
            cart();
        }
    }
}

function removeProduct(idProduct) {
    let currentUser = users.find(user => user.id == checkLogin);

    if (currentUser) {
        let productIndex = currentUser.cart.findIndex(product => product.id == idProduct);
        if (productIndex !== -1) {
            currentUser.cart.splice(productIndex, 1);
            localStorage.setItem("users", JSON.stringify(users));
            cart();
        }
    }
}


function handleCheckout() {
    // Show success message
    alert('Payment successful!');

    // Clear the table body content (tbody)
    document.getElementById('tbody').innerHTML = '';
    document.getElementsByClassName('pay')[0].innerHTML='';   
    users.pay = 1;
}
document.querySelector('.btn-outline-info').addEventListener('click', handleCheckout);

