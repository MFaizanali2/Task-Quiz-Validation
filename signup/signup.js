let formfield = document.querySelectorAll("form input")

console.log(formfield)
const [Username, UserEmail, UserPassword] = formfield;

console.log(Username, UserEmail, UserPassword)
// let arraydata = [];

function signup(){
    
    event.preventDefault();
    
    // window.location.href = "../Login/login.html";
    if(Username.value !== "" && UserEmail.value !== "" && UserPassword.value !== ""){
        let obj = {
            user : Username.value,
            signupEmail : UserEmail.value,
            signupPassword : UserPassword.value,
        }
        localStorage.setItem("userData", JSON.stringify(obj))
        // console.log(window.location.href = "../Login/login.html");
        window.location.href = "../Login/login.html";
        // arraydata.push(obj)
        // console.log(arraydata)
    console.log(Username.value, UserEmail.value, UserPassword.value)
    }else{
        alert("pillay")
    }
}


    let image = document.getElementById("pic");
        console.log(image)
    let showimage = document.querySelector("img")
    const uploadimage = () =>{
        console.log(image.value);
    let img = image.files[0];
    let fileRead = new FileReader();
 
    fileRead.onload = () =>{
        showimage.src = fileRead.result;
        console.log(fileRead.result)
    }
    fileRead.readAsDataURL(img)
    console.log(img)
}