// cunstructuror funcion ko decorate karke likhne ke tari ko class kahte hai. 

    /*constructor(){} - constructor ka kam hota hai default value set karna ya initialze karna,
     variables create karna  */


class CreatePen{
    constructor(name, company, price, color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1)
    }

    erase(){
        document.body.querySelectorAll("h1").forEach((elm)=>{
            if(elm.style.color === this.color){
                elm.remove();
            }

        } )

    }
}


let p1 = new CreatePen("Natraj", "nataraj", 10, "black");
let p2 = new CreatePen("Apsara", "apsara", 15, "blue");

