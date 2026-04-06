function countForMe(){
    let c= 0;
    return function(){
        c++;
        console.log(c);
    }
}
let fnc = countForMe();  // khud ke c ki value ko yaad rakhata 
// clouser me funciton ko phli baar chalane par hamesa ek function milta hai aur dusari bar call hone par work start hoga.

fnc();  //1
fnc(); //2
fnc(); //3

let fnc2 = countForMe(); // khud ke c ki value ko yaad rakhata hai
fnc2(); //1
fnc2() //2
fnc2() //3
fnc2() //4