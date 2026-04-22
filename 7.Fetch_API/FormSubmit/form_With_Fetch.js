
let form = document.querySelector("form");
let name = document.querySelector("name");
let email = document.querySelector("email");
let password = document.querySelector("password");

form.addEventListener("submit", function (evt) { 
    evt.preventDefault();
    fetch("url", {
        methot: "POST",
        body: JSON.stringify({
            name,
            email,
            password
        }) //  body ka hi istemal karte hai jo bhi data bhejna ho
    });

 })

