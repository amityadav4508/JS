let role = "admin";


let obj = {
    name: "harsh",
    age:26,
    emil: "test@test.com",
    address:{
        city: "delhi"
    },
    [role]: "Amit"
}

//  spread 
// let obj2 = {...obj};

// Copy with spread
// let obj2 = {...obj};
// obj2.address.city = "indore";


// Jab ek object me nested objects hote hain aur hum usse copy karte hain, (chahe spread operator se hi kyun na ho), to sirf top-level object ki values copy hoti hain, Andar ke nested objects fir se reference ke through pass hote hain. Ish problem se bachne ke liye hum deep clone ka use karte hain.

// Deep clone 

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.address.city="Noida";

// optional chaining 

console.log( obj.address.city) // it's throw the an error 

console.log( obj?.address?.city) // it's gives undefined


// computed properties

// Giv a dynamic key let key = "age", how will access user[key]

let key = "age";
const user = {
    age: 26,
    "first-name": "Harsh",
};

console.log( user[key]);


// Destructue the key "first-name" as a variable called firstName

let {"first-name": firstName} = user;

console.log(firstName);

// user for in to log all keys in this object:


const course = {
    title: "javaScript",
    duration: "4 weeks",
}

for(let key in course){
    console.log(key);
}

// Use Object.entries() to print all key-value pairs as:
 // title: javascritp
 // duration: 4 weeks

Object.entries(course).forEach(function(val){
    console.log(val);
 });

 Object.entries(course).forEach(function(val){
    console.log(val[0] + ":" + val[1]);
 });


const original = {a:1, b:2};
const copy = {...original};


// Rewrite this safely using optional chaning:

// use a variable to dynamically assign a property 




















// leats use 
let obj3 = Object.assign({}, obj);
let obj4 = Object.assign({price: Infinity}, obj);

