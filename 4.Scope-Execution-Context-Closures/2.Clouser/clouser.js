// Closures hote hai functions jo ki kisi parent function ke andar hou aur andar waale function return ho rha ho, and returning function youse kare parent function ka koi variable.


function abc(){
    let a =12;
    return function(){
        console.log(a) };}

let fnc = abcd();
fnc() // ans = 12

// ye sach hai function ke khatam hone pe aapka function and uska variables khatm ho jate hai, par jab bhi clouser banta h to aapka function aur uske variables ka ek backlink banya jata hai aur uska nam hota hai [[environment]]


