//  call apply bind 
// funcction ko call karte waqt aap set kr skte ho ki uski this ki value kay hogi


//JavaScript ke methods hain: call, apply, aur bind.
// Inka use hota hai function ka execution context (this) control karne ke liye.

// call:
// call ka use karke hum kisi function ko manually invoke (run) kar sakte hain
// aur usme this ki value set kar sakte hain.
// Arguments yahan individually pass hote hain.

// apply:
// apply bhi call jaisa hi hai,
// bas difference yeh hai ki isme arguments array ke form mein pass hote hain.

// bind:
// bind ek naya function return karta hai jisme this permanently set ho jata hai.
// Yeh zyada useful hota hai callbacks aur event handlers mein.


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

function abcd2(a, b, c){
    console.log(this, a, b, c);
}

abcd2.call(obj2, [1, 1, 3]);



let obj3 = {
    name: "harsh",
    age: 26,
};

function abcd3(a, b, c){
    console.log(this, a, b, c);
}

let fnc = abcd3.bind(obj2, 1, 1, 3);
fnc()

