let formfield = document.querySelectorAll("form input")

console.log(formfield)
const [Username, UserEmail, UserPassword] = formfield;

console.log(Username, UserEmail, UserPassword)


function signup(){
    
    event.preventDefault();
    
    // window.location.href = "../Login/login.html";
    if(Username.value !== "" && UserEmail.value !== "" && UserPassword.value !== ""){
        let obj = {
            user : Username.value,
            signupEmail : UserEmail.value,
            signupPassword : UserPassword.value
        }
    // console.log(Username.value, UserEmail.value, UserPassword.value)
    }else{
        alert("pillay")
    }
}