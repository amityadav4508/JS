// global scope me this ki value hamesha window hoti ha
console.log(this)

// Function me this ki value hamesha window hoti h

function abcd(){
console.log(this);
}
abcd()


// method: aisa function jo ki object ke andar ho use hame method kahte hai. 
// agr this keyword object ke method ke aandar ho to this object ke barabar ho jayega.

// agar ham function ke and arrow function ()=> glti se lga diya to this object ke barabar nhi hoga. this apni value loose kar dega aur waps se window ke barabar ho jayega.


let obj = {
    name: "harsh",
    age: 26,
    // sayName: ()=>{   // not use with this keyword. always use ES5
    sayName: function(){
        console.log(this);
    }
}
obj.sayName();


// ager apne method ke and ak function aur bna diay to this apne value fir loose kar dega aur isko ye window bna dega. agar app chahte ho ki ye window na bane object hi rhe to ishe handle karne ke liye hamesha arrow function bnao.
let obj2 = {
    name: "harsh",
    age: 26,
    // sayName: ()=>{   // not use with this keyword. always use ES5
    sayName: function(){  
        let defg = () =>{
            console.log(this)
        }
        defg();
        
    }
}
obj2.sayName();



//  event handler me this ki value vhi hoti h jis event par apne target kiya hai.

document.querySelector("h1")
.addEventListener("click", function(){
    console.log(this);
})


// class ke andar this key value blank hoti h jab app use new keyword ke sath call karte ho.

class Abcd{
    a = 12;
    constructor(){
        console.log("hyyy")
        this.a = 12;
    }
}

let val = new Abcd();




// global - window
// function -window
// method with ES5 fnc - object
// method with es6 arrow fnc - window
// es5 function inside es5 method - window
// arrow function inside es5 method - object
// evetnt handler - element
// class - blank object 


