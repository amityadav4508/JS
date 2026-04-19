// Extends and Super
// extends ka use hota hai ek class ko dusri class se inherit karne ke liye.
//  Matlab: child class parent class ke properties + methods youse kar sakta hai.


// super ka use hota hai parent class ke constructor ya methods ko call karne ke liye.



// nayi class purani class ki kuchh values (properties/methods) hold kar sakti hai

class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    // user ka role check karne ke liye method
    checkRole() {
        console.log(`You are a ${this.role}`);
    }

    // screen par text likhne ke liye method
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}


// Admin class User ko extend kar rahi hai
class Admin extends User {

    // jab aap extend karte ho to constructor me parent ki saari values leni padti hain
    // aur super() me bhi pass karni padti hain
    constructor(name, address, username, email) {
        super(name, address, username, email);

        // admin ki apni value (override)
        this.role = "admin";
    }

    // remove method ka access sirf admin ke paas hoga
    remove() {
        document.querySelectorAll("h1").forEach(function (elm) {
            elm.remove();
        });
    }
}


// Objects (instances)
let u1 = new User("Harsh", "Bhopal", "async123", "hey@heyehey.com");
let u2 = new User("Tanya", "Bhopal", "async456", "tanya@heyehey.com");
let a1 = new Admin("Gaurav", "Agra", "admin123", "gaurav@heyehey.com");


// Testing
u1.write("Hello from user 1");
u2.write("Hello from user 2");

a1.write("Hello from admin");
a1.checkRole(); // admin

// a1.remove(); // isko uncomment karoge to saare h1 delete ho jayenge


/* Classical vs Prototypical Inheritance*/

/* Classical inheritance - classes bana kar unhe extend karna
 inheritance - class se class */


/* Prototypical inheritance - object se object
ek object hai, aap chaaho to uski saari props/method doosre object me inherit kara sakte ho */

let coffee = {
    color: "dark",
    drink: function () {
        console.log("gutgut gut");
    }
};

// coffee object ko base bana kar naya object create kiya
let arabicaCoffee = Object.create(coffee);

// ye properties prototype se aa rahi hain
console.log(arabicaCoffee.color); // dark
arabicaCoffee.drink(); // gutgut gut