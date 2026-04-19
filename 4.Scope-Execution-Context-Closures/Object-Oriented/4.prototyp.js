
// Portotypes - means extra memory or shared memory

/* agar tumhar constructor function koi field apne prototype par attach karle to us constructor 
se banane wale sabhi new instance yani ki objects ke pass wo filed automatically chali jati hai.  */


function CreatePencilP(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = "sheryians";
  
}

CreatePencilP.prototype.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }


// This is the shared memory 
CreatePencilP.prototype.company = "sheryians";


let pencilP1 = new CreatePencilP("Nataraj", 10, "blue", "nataraj");

let pencilP2 = new CreatePencilP("Doms", 5, "red", "coms")

