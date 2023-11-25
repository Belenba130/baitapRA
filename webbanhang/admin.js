
const users = JSON.parse(localStorage.getItem('users')) || [];

const tableUser = document.querySelector('#user-list tbody');

// in người dùng
function displayUsers() {
    tableUser.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = user.id;
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
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-primary', 'btn-sm');
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
// function editProduct(product) {
//     const nameInput = document.createElement('input');
//     nameInput.value = product.name;
//     const qualityInput = document.createElement('input');
//     qualityInput.value = product.stock;
//     const costInput = document.createElement('input');
//     costInput.value = product.price;
//     const statusInput = document.createElement('input');
//     statusInput.value = product.status;

//     const row = document.querySelector(`tr[data-product-id="${product.id}"]`);
//     if (!row) return;

//     const nameCell = row.querySelector('td:nth-child(2)');
//     const qualityCell = row.querySelector('td:nth-child(3)');
//     const costCell = row.querySelector('td:nth-child(4)');
//     const statusCell = row.querySelector('td:nth-child(5)');

//     nameCell.innerHTML = '';
//     nameCell.appendChild(nameInput);
//     qualityCell.innerHTML = '';
//     qualityCell.appendChild(qualityInput);
//     costCell.innerHTML = '';
//     costCell.appendChild(costInput);
//     statusCell.innerHTML = '';
//     statusCell.appendChild(statusInput);

//     nameInput.addEventListener('input', () => {
//         product.name = nameInput.value;
//         localStorage.setItem('products', JSON.stringify(products));
//     });

//     qualityInput.addEventListener('input', () => {
//         product.stock = qualityInput.value;
//         localStorage.setItem('products', JSON.stringify(products));
//     });

//     costInput.addEventListener('input', () => {
//         product.price = costInput.value;
//         localStorage.setItem('products', JSON.stringify(products));
//     });

//     statusInput.addEventListener('input', () => {
//         product.status = statusInput.value;
//         localStorage.setItem('products', JSON.stringify(products));
//     });
// }


