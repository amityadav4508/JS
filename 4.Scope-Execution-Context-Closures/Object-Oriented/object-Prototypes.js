// humein seekhna h, factories bannana, matlab ki aap ek baar blueprint bana do ki har object kaisa dikhega and hum log naye naye object with different values bana paayege, yhi upar upar se poora kaam hai OOPs mein.


function CreateBiscuits(name, price, qty, comapany, category){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.comapany = comapany;
    this.category = category;
}

let biscuites1 = new CreateBiscuits("Oreo", 10, 5, "Cadbury",  "choclate");

let biscuites2 = new CreateBiscuits("fantsy", 20, 3, "parle", "Choclate sunfeaset")




function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(){
        let h1 = document.createElement("h1");
        h1.textContent = "Hey HOw Are YOU"
        h1.style.color = color;
        document.body.appendChild(h1);

    }
}

// aisa function jisko aap new chaltete ho use consturcture kahte hai aur ishiliye iska phle letter Capital karna chahiye.
// new ka matlab hota ek nya object ban jata h ye good practice hai.

let pencil1 = new CreatePencil("Nataraj", 10, "blue", "nataraj");

let pencil2 = new CreatePencil("Doms", 5, "red", "coms")



// Portotypes - means extra memory or shared memory

// agar tumhar constructor function koi fiel apne prototype par attach karle to us constructor se banane wale sabhi new instance yani ki objects ke pass wo filed automatically chali jati hai. 

// ye 

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

CreatePencilP.prototype.company = "sheryians";


let pencilP1 = new CreatePencilP("Nataraj", 10, "blue", "nataraj");

let pencilP2 = new CreatePencilP("Doms", 5, "red", "coms")


