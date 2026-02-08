// select a paragraph and replace its content with 
//  <b>Update</b>by javascript</>

let p = document.querySelector("p");
p.innerHTML = "<b> upated</b> by javaScript";


// how do you get the src of an imae using JavaScript?


let img = document.querySelector("img");
console.log(img.getAttribute("src"));
console.log(img.src);

// how to set attribute an image using JavaScript 

let img2 = document.querySelector(".img2");
img2.setAttribute("src", "https://www.w3schools.com/images/w3schools_green.jpg")

img2.removeAttribute("src")




