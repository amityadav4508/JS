let a = 10;
let b= 20;
console.log(a+b);

let r = 12;
console.log(Number((2*Math.PI*r).toFixed(2)));

//  valid voter

let ans = Number(prompt("what is your age?"))

if(isNaN(ans)){
    console.log("worng log input")
} else if(ans>=18){
    console.log("you can vote")
} else{
    console.log("you cant vote");
}


// Shop discount

let amount = Number(prompt("Enter payable amoutn"));
let dis = 0;

if(amount>0 && amount<=5000){
    dis = 0
}else if(amount>5000 && amount<=7000){
    dis = 5;
}else if(amount>7000 && amount<=9000){
    dis = 10;
}else if(amount>9000 && amount<=12000){
    dis = 20;
}
console.log(amount - Math.floor( (dis*amount)/100));

// electricity bill