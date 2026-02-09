// print odd number from 1 to 15 using a while loop.

// i=1;
// while(i<=15){
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++;
// }

// print the multiplication table of 5(i.5x1=5 ... 5x10=50)

// for( let i=1; i<=10; i++){
// console.log(`5*${i} = ${5*i} `);

// }  

let sum = 0;

for(i=1; i<=50; i++){
    if(i%3==0){
        sum=sum+i
    }
}
   console.log(sum);

// count how many numbers between 1 to 100 are divisible by both 3 and 5


// for(i=1; i<=100; i++ ){

//     if(i%3==0 && i%5==0){
//         console.log("this number is divisible by 3 and 5",i)
//     }
// }

// stop at first multiple of 7

// write a loop for 1 to 100 that:
// 1. prints each number
// 2. stop completely when it finds the first number divisible by 7


// for(i=1; i<=100; i++){
//      console.log(i);
//     if(i%7==0){
//         break;
//     }
// }


// skip multiples of 3

// write a loop for 1 to 20 that:
// 1. skips numbers divisble by 3
// 2. print all others

// use continue
// expected ouptut:

// for(i=1; i<=20; i++){
//     if(i%3===0){
//         continue
//     } else{
//         console.log(i);
//     }
// }



// print first 5 odd number only

// write a loop from 1 to 100 that:
//1. print only 5 odd numbers
//2. then stoops the loop

// use both if, continue, and a counter + break

// expected output: 1 3 5 7 9

// let count = 0;
// for(i=1; i<=100; i++){

//     if(i%2!=0){
//         count++
//         console.log(i);
//     }
//     if(count==5) break
// }




//i am completele beginner in js and iprefer hinglish, give me some questions to solve around 10 questions which are ultimate beginner-friendly.


// Agar age 18 ya usse zyada ho → "You can vote"

// Warna → "You cannot vote"

// let age = prompt("enter you age")

// if(age>=18){
//     console.log("you can vote");
// } else{
//     console.log("you can not vote");
// }


let num1 = prompt("enter first number")
let num2 = prompt("enter 2nd number")
let operator = prompt("Enter operator (+, -, *, /)");


num1 = Number(num1);
num2 = Number(num2);



if(operator==="+"){
    console.log("result:", num1 + num2)
} else if(operator==="-"){
    console.log("result:",num1-num2)
} else if(operator === "*"){
    console.log("result:", num1*num2);
}else if(operator==="/"){
    console.log("result:", num1/num2);
} else{
    console.log("Invalid Operator")
}