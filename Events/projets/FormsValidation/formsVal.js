// give me a regex for email and password


let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form")

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
        document.querySelector("#passwordError").textContent = "";


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   let emailans = emailRegex.test(email.value);
   let passwordans = passwordRegex.test(password.value);

   let isValid = true;

   if(!emailans){
    document.querySelector("#emailError").textContent = "Email is incorrect";
document.querySelector("#emailError").style.display = "block";

    isValid = false;
   }

   if(!passwordans){
    document.querySelector("#passwordError").textContent="password is incorrect";
    document.querySelector("#passwordEroor").style.display = "initial" 
    isValid = false;

   }


if(isValid){
    document.querySelector("#ressultMessage").textContent="every thin is correct"
}



})