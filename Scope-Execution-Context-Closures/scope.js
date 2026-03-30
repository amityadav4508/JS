function abcd(){
    var a = 12; // functional scope
}
console.log(a);

var a = 12; // global scope - Ager aapka code kisi bhi {} ke andar nhi hai to aapka code global hai.
function abcd(){
}
console.log(a);


// block scope:
if(b) {
    let a = 20;
}
