const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    container.classList.remove('right-panel-active');
});

function uuid() {
    return Math.floor(Math.random() * 885688785522 + new Date().getMilliseconds());
}

function signUp() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userName = document.getElementById("name").value;
    let email = document.getElementById("usermail").value;
    let password = document.getElementById("userpassword").value;
    let obj = {
        name: userName,
        email: email,
        password: password,
        id: uuid(),
        cart: [],
        status: "Active", 
        rule: 0,
        pay:0
    }

    let find = users.filter((item) => {
     
        return item.email == email; 

    });
    if (find.length !== 0) {
        alert("Email has already been registered");
        return;
    }else{
        alert("Sign Up Success!")
    }

    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    
   


    document.getElementById("name").value = "";
    document.getElementById("usermail").value = "";
    document.getElementById("userpassword").value = "";
}


function signIn() {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let accountExists = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            if (users[i].rule==0){
            localStorage.setItem("idUser", users[i].id);
            window.location.href = "./products.html";
            accountExists = true;
            break;}
            else{
                localStorage.setItem("idUser", users[i].id);
                window.location.href = "./admin.html";
                accountExists = true;
            }
        }
    }

    if (!accountExists) {
        alert("Tài khoản không tồn tại!");
    }else {
        alert("Login Success!")
    }
}






