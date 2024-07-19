let formfield = document.querySelectorAll("form input")

console.log(formfield)
const [loginEmail, loginPassword] = formfield;

let data = localStorage.getItem("userData")

const login = () => {
     
    event.preventDefault();
    console.log(loginEmail.value , loginPassword.value)

}
