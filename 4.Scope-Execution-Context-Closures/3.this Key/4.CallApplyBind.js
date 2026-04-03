// Call Apply Bind

// function ko call karte waqt aap set kr skte ho ki uski this ki value kya hogi.


let obj = {
    name: "harsh",
    age: 26,
};

function abcd(){
    console.log(this, a, b, c,);
}

abcd.call(obj);

let obj2= {
    name: "harsh",
    age: 26,
};

function abcd(){
    console.log(this, a, b, c);
}

abcd.call(obj2, a, b, c);