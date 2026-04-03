//  call apply bind 
// funcction ko call karte waqt aap set kr skte ho ki uski this ki value kay hogi




// “CallApplyBind” it references the methods call, apply, and bind, which are used to control the execution context (this) of functions. These methods are fundamental in JavaScript for:

// call: Invoking a function with a specified this value and arguments provided individually.

// apply: Similar to call, but arguments are passed as an array.

// bind: Creates a new function with a permanently bound this value, useful for callbacks and event handlers.



let obj = {
    name: "harsh",
};

function abcd(){
    console.log(this);
}
// abcd()
abcd.call(obj);


let obj2 = {
    name: "harsh",
    age: 26,
};

function abcd(){
    console.log(this, a, b, c,);
}

abcd.call(obj2);
