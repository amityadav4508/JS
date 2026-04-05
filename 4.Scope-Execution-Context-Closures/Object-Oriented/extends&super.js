// Extends and super

// nai clas pichalis class ki kuchh value hold kar skti hai. 

class User{
    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    checkRole(){
        console.log(`You are are a ${this.role}`)
    }

    write(text){
     let h1 =  document.createElement("h1")
     h1.textContent = ` ${this.name} : ${text}`;
     document.body.appendChild(h1);
    }
}



class Admin extends User{

    // jab ap extend kroget to construcor me jo jo ap upar hai sab accept karna padega and super me bhi sab kuchh pass karna padega
    constructor(name, address, username, email){
        super(name, address, username, email)

        // admin ki kud ki value 
        this.role = "admin"
    }

    // remove method ka keval admin ke pass access rehega 

    remove(){
        document.querySelectorAll("h1").forEach(function(elm){
            elm.remove();

        })

    }



}


// objects
let u1 = new User("Harsh", "Bhopal", "async123", "hey@heyehey.com");
let u2 = new User("Tanya", "Bhopal", "async123", "tanya@heyehey.com");
let a1 = new Admin("Gaurav", "Agra", "async123", "gaurav@heyehey.com");




//  Classical inheritance - classess banna and unhe extends krdena

// inheritance - class se  class 

// Prototypical inheritance  - opject se object

// ek object hai aap chaaho to uski saari props/method ko inherit kara dete ho doosre object mein


let coffee = {
    color: "dark",
    drink: function(){
        console.log("gutgut gut");
    },
}

let ArabiataCoffee = Object.create(coffee);
console.log(ArabiataCoffee);
ArabiataCoffee.drink();

