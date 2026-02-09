let arr = [1, 5, 10, 15, 20, 25, 30, 35, 40]

// forEeach

arr.forEach(function(val){
    // console.log(val  + 5);
})

// Map()

// map srf tab youse karna hia jab aapko ek nya array banan hai pichle array ke data ke basis par

// map dikhte hi saath man mein ek blankc array bna liya kro

// Jab bhi aapko aisa koi case dikh jaaye jaha par ek array se nay array banega and wo nya array kuchh values ko rakhega tab map lagega


// use map() to square each number

let newarr = arr.map(function(val){
    if(val>10) return val;
})

console.log(newarr)

// use filter() to keep numbers greate than 10;

let newArrfl = arr.filter(function(val){
    if(val>4) return true;
})

console.log(newArrfl)


// use reduce() to find the sum of this arry

arr.reduce(function(accumulator, val){
    return accumulator + val;
}, 0)

// use find() to get the first number less than 10;

arr.find(function(val){
    return val<10;
})

// use some() to check if any student has scored below 35

let lesScore = arr.some((val)=>{
    return val<35;
})

// use every() to check if all numbers are even;

let arr2 = [4,6,8,10]

 let everyArray =  arr2.every((val)=>{
    if(val%2===0){
        return val;
    }

 })

 // destructure this arrayto get firstName and lastName

 let fullName = ["Harsh", "Sharma"]

 let [firstName, lastName] = fullName;


//  Merge two arrays using spread operator

let a = [1,2]
let b = [3,4]

let c = [...a, ...b];

// add "India" to the start of this array using spread;


let countries = ["USA", "UK"];

countries = ["india", ...countries];


// clone this aray properly (not by refrence)

let arrs = [1, 2, 3];

let arrs2 = [...arrs];




















