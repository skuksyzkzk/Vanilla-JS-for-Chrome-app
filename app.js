const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function handleLoginBtn() {
    const value = loginInput.value;
    console.log(value);
}

loginBtn.addEventListener('click',handleLoginBtn);