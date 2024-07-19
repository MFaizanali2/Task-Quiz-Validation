let formfield = document.querySelectorAll("form input")

console.log(formfield)
const [loginEmail, loginPassword] = formfield;


const login = () => {
     
    event.preventDefault();
    console.log(loginEmail.value , loginPassword.value)

}
