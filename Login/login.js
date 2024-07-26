let box = document.querySelector(".box");

box.innerHTML = `
<div class="container">

        <div class="row">

            <div class="col">
                <img src="./images/hat.png" alt="Hat Image" id="hat">
            </div>
            <div class="col">
                <div id="quiz">
                    <img src="../signup/images/QuizGrad.png" alt="logo image" id="quiz1">
                </div>
                <h5>If you're signed-up now login to continue</h5>
                <form onsubmit="login();">
                    <div class="mb-3">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="loginEmail" placeholder="Email and phone">
                    </div>
                    <div class="mb-3">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="loginPassword"
                            placeholder="Enter your Password">
                    </div>
                    <div class="mb-3">

                        <div id="bottom">
                            <button type="submit" id="btn" class="btn btn-primary" onclick="login();">Log In</button>
                        </div>
                </form>
            </div>

        </div>

    </div>`









let formfield = document.querySelectorAll("form input")


console.log(formfield)
const [loginEmail, loginPassword] = formfield;

let data = JSON.parse(localStorage.getItem("userData"))

const login = () => {

    event.preventDefault();
    const { UserEmail, UserPassword } = data;

    if (UserEmail === loginEmail.value && UserPassword === loginPassword.value) {
        alert("login")
    } else {
        alert("invalid")
    }


    // console.log(loginEmail.value , loginPassword.value)
    // console.log(data)
    window.location.href = "../dashboard/dash.html";

}
