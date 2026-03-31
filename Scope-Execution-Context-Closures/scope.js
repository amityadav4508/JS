function abcd(){
    var a = 12; // functional scope
}
console.log(a);

var a = 12; // global scope - Ager aapka code kisi bhi {} ke andar nhi hai to aapka code global hai.
function abcd(){
}
console.log(a);


<<<<<<< HEAD
//block scope: 
=======
// block scope:
>>>>>>> 47205e327d58fe2c0c7cce64f457d20befdfe5ad
if(b) {
    let a = 20;
} 
