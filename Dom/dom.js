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

img2.removeAttribute("src");


// user querySelector to all button with class "by-now"

let bynow = document.querySelectorAll(".buy-now");

console.log(bynow)

// Task1
// slecet the heading of a page by ID and chage its text to "welcom to the coding"

let head = document.querySelector("#heading");
head.textContent = "welcome to coding"


//  select all <li> element and print theri text using a loop;

let lis = document.querySelectorAll("li")
    lis.forEach(function(val){
        console.log(val.textContent);
    })

    // or with method

for(let i =0; i<lis.length; i++){
    console.log(lis[i].textContent)
}

// 

// what is the diffrence b/w innertext, textContent, and innerHtml
// h1.textContent = "welcome"
// div.innerText = "cange text"
// h1.innerHTML = "change with html"


// When should you use textContent instead of innerText


// T3:
// slect a link and update its href to point to https//google.com

let a = document.querySelector("a");

a.href = "https://www.google.com"
a.setAttribute("target", "_blank")



// add a title attirbute to a div dynamically

let title = document.querySelector("div");
title.setAttribute("title", "Hey budy")


// enable and disable button

let enablebtn = document.querySelector(".enable");
enablebtn.removeAttribute("disabled");

// what does createElement() do? what's returned // it's return node


// What is the diffrence b/w appendChild() and prepend()

   // prepend add start of the Element
   // appendChild - add end oth element

// Can you remove an Element using removeChild() // yes

// document.querySelector("div").removeChild(ElementNOde);



//  create a new list item <li> New task </li> and add it to the end of a <ul>

 let ul =document.querySelector("ul");
 let li = document.createElement("li");
 li.textContent = "New task";

 ul.appendChild(li);


//   create a new image element with a placeholder source and add it at the top of ad div

let div = document.querySelector("div");
let img1 = document.createElement("img");
img1.setAttribute("src", "https://www.w3schools.com/images/w3schools_green.jpg");
img1.classList.add("placeholder")
div.prepend(img1);




//  select the first item in a list and delet it from the DOM

let ul2 = document.querySelector("ul");
let li2 = document.querySelector("li");

ul2.removeChild(li2);

//  how do you chaneg the background color of an element?
ul2.style.backgroundColor = "red";


// add a highlight class to every even item in a list

let li3 = document.querySelectorAll("ul li:nth-child(2n)");

li3.forEach(function(elem){
    elem.classList.add("highlight")

})
console.log(li3)

// or // Run the JS after the DOM loads (or put script at the bottom)

// document.addEventListener("DOMContentLoaded", () => {
//   let ul = document.querySelector("ul");
//   let li = document.createElement("li");
//   li.textContent = "New task";
//   ul.appendChild(li);
// });



//  set the font size of all <p> element to 18px using .style

let p2 = document.querySelectorAll("p");
p2.forEach(function(elem){
    elem.style.fontSize = "20px"
})



