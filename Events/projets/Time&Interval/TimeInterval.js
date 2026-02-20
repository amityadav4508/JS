// let ti = setInterval(function(){
//     console.log("hellow");
// }, 5000)

// clearInterval(ti);


let count = 10;

let interval = setInterval(function(){
    if(count>=0){
        console.log(count)
        count--;
    } else{
        clearInterval(interval)}
}, 1000)