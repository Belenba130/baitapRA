
const users = JSON.parse(localStorage.getItem('users')) || [];

const tableUser = document.querySelector('#user-list tbody');

// in người dùng
function displayUsers() {
    tableUser.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = user.id;
        idCell.classList.add('ps-4')
        row.appendChild(idCell);


        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = user.status;
        row.appendChild(statusCell);

        const actionCell = document.createElement('td');

        // tạo button
        const editButton = document.createElement('button');
        editButton.textContent = 'Change';
        editButton.classList.add('btn', 'btn-success', 'btn-sm','me-3');
        editButton.addEventListener('click', () => {
            if (user.status === 'Active') {
                user.status = 'Block';
            } else {
                user.status = 'Active';
            }
            localStorage.setItem('users', JSON.stringify(users));
            displayUsers();
        });
        actionCell.appendChild(editButton);
        const ruleButton = document.createElement('button');
        ruleButton.textContent = 'Rule';
        ruleButton.classList.add('btn', 'btn-primary', 'btn-sm','me-3');
        ruleButton.addEventListener('click', () => {
            if (user.rule === 0) {
                user.rule = 1;
            } else {
                user.rule = 0;
            }
            localStorage.setItem('users', JSON.stringify(users));
            displayUsers();
        });
        actionCell.appendChild(ruleButton);


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => {
            const index = users.findIndex(u => u.id === user.id);
            if (index !== -1) {
                users.splice(index, 1);
            }

            localStorage.setItem('users', JSON.stringify(users));

            displayUsers();
        });
        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);
        tableUser.appendChild(row);
    });
}

displayUsers();



// in sản phẩm
const products = JSON.parse(localStorage.getItem('products')) || [];
const tableProduct = document.querySelector('#products-list tbody');

function displayProducts() {
    tableProduct.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = product.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const qualityCell = document.createElement('td');
        qualityCell.textContent = product.stock;
        row.appendChild(qualityCell);

        const costCell = document.createElement('td');
        costCell.textContent = product.price;
        row.appendChild(costCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = product.status;
        row.appendChild(statusCell);

        const actionCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => {
            const index = products.findIndex(p => p.id === product.id);
            if (index !== -1) {
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                displayProducts();
            }
        });
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'me-2');
        editButton.addEventListener('click', () => {
            editProduct(product);
        });

        actionCell.appendChild(editButton);
        row.appendChild(actionCell);

        tableProduct.appendChild(row);
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        tableProduct.appendChild(row);
    });
}

displayProducts();
function editProduct(product) {
    const editProductName = document.getElementById('editProductName');
    const editProductStock = document.getElementById('editProductStock');
    const editProductPrice = document.getElementById('editProductPrice');
    const editProductStatus = document.getElementById('editProductStatus');

    editProductName.value = product.name;
    editProductStock.value = product.stock;
    editProductPrice.value = product.price;
    editProductStatus.value = product.status;

    document.getElementById('editProductForm').style.display = 'block';

    document.getElementById('editSaveButton').onclick = function() {
        saveEditedProduct(product);
    };
}

function saveEditedProduct(product) {
    const editProductName = document.getElementById('editProductName').value;
    const editProductStock = parseInt(document.getElementById('editProductStock').value);
    const editProductPrice = parseFloat(document.getElementById('editProductPrice').value);
    const editProductStatus = document.getElementById('editProductStatus').value;

    if (editProductName && !isNaN(editProductStock) && !isNaN(editProductPrice)) {
        product.name = editProductName;
        product.stock = editProductStock;
        product.price = editProductPrice;
        product.status = editProductStatus;

        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            products[index] = product;
            localStorage.setItem('products', JSON.stringify(products));
            displayProducts();
            document.getElementById('editProductForm').style.display = 'none';
        }
    } else {
        alert('Invalid input! Please provide valid details.');
    }
}


function chang (){
    let userpage = document.getElementById('user');
    let productpage = document.getElementById('products');
    userpage.style.display = "none";
    productpage.style.display="block";
}

function change (){
    let userpage = document.getElementById('user');
    let productpage = document.getElementById('products');
    userpage.style.display = "block";
    productpage.style.display="none";
}

function logOut() {
    localStorage.removeItem('idUser');
    window.location.href = 'login.html';
}


