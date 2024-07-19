let formfield = document.querySelectorAll("form input")

console.log(formfield)
const [loginEmail, loginPassword] = formfield;


const login = () => {
     
    console.log(loginEmail.value , loginPassword.value)

}
