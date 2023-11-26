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
                    <td> ${currentUser.cart[index].quantity} </td>
                    <td> ${VND.format(currentUser.cart[index].quantity * currentUser.cart[index].price)} </td>
                    <td> Đã Thanh Toán </td>
                </tr>
            `;
        }
        document.getElementById("user-name").innerHTML=currentUser.name;
        document.getElementById("tbody1").innerHTML = text;
        document.getElementsByClassName("pay")[0].innerHTML = VND.format(pay);
    }
}
cart();

function logout() {
    localStorage.removeItem('idUser');
    window.location.href = 'login.html';
}
