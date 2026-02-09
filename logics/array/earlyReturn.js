//  write a function getGrade(score) that:
    //  1. takes a studet's marks (0 to 100)
    //  2. Return the grade based on this logic
    // 90-100 A+
    // 80-89  A
    // 70-79 B
    // 60-69 C
    // 33-59 D
    // 0-32 Fail
    // anything else Invalid marks


function getGrade(score){

// without early return pattern

    // if(score >= 90 && score <= 100){
    //     return "A+"
    // }
    // else if(score >= 80 && score<=89){
    //     return "A";
    // }
    // else if(score >=70 && score <= 79){
    //     return "B";
    // }
    // else if(score >= 60 && score <=60){
    //     return "C";
    // }
    // else if(score >= 33 && score <= 59){
    //     return "D";
    // }
    // else if(score >= 0 && score <=33 ){
    //     return "E";
    // } else{
    //     return "Invalid marks";
    // }


    // with early return pattern

    if(score >= 90 && score <= 100)  return "A+"
    if(score >= 80 && score<=89)  return "A";
    if (score >=70 && score <= 79) return "B";
    if (score >= 60 && score <=60)  return "C";
    if (score >= 33 && score <= 59) return "D"; 
    if (score >= 0 && score <=33 ) return "E";
     else{
        return "Invalid marks";
    }

}

console.log(getGrade(0));



//  Rock paper-scissors logic

function rps(user, computer){

    if(user === computer ) return "draw"
    if(user === "rock" && computer === "scissor") return "user";
    if(user === "scissor" && computer === "rock") return "computer";
    if(user === "paper" && computer === "rokc") return "user";
    if(user === "rock" && computer === "paper") return "computer";
    if(user === "scissor" && computer === "paper") return "user";


    //or

    if(user === computer ) return "draw"

    if(user === "rock" && computer === "scissor") return "user";
    if(user === "paper" && computer === "rokc") return "user";
    if(user === "scissor" && computer === "paper") return "user";

    return "computer"
}

console.log(rps("rock", "rock"))






