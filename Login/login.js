let formfield = document.querySelectorAll("form input")

console.log(formfield)
const [loginEmail, loginPassword] = formfield;

let data = JSON.parse(localStorage.getItem("userData"))

const login = () => {
     
    [UserEmail, UserPassword] = data;
    event.preventDefault();
    console.log(loginEmail.value , loginPassword.value)
    console.log(data)
    window.location.href = "../dashboard/dash.html";

}
