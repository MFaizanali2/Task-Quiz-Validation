let formfield = document.querySelectorAll("form input")

console.log(formfield)
const [Username, UserEmail, UserPassword] = formfield;

console.log(Username, UserEmail, UserPassword)


function signup(){

    // window.location.href = '../Login/login.html'
    console.log(Username.value, UserEmail.value, UserPassword.value)
    window.location.href = "../Login/login.html";

}