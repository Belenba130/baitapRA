function scrollToBottom() {
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
    });
}

// thầy ơi coi giúp em phần này nữa ạ

function updateLoginButton() {
    const loginButton = document.getElementById('loginbtn');
    const checkLogin = localStorage.getItem('idUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users)
  
    if (checkLogin) {
      const currentUser = users.find(user => user.id === checkLogin);
      console.log(currentUser);
  
      if (currentUser) {
        loginButton.textContent = currentUser.name;
        loginButton.href = "user.html";
        loginButton.classList.remove('link-offset-2', 'link-underline', 'link-underline-opacity-0');
      }
    }
  }
  updateLoginButton();
  