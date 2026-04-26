function createProduct(name, price){
    let stock = 10;
    return{
        name,
        price,
        checkStock(){
            console.log(stock)
        },
        

        buy(qty){
            if(qty<=stock){
                stock -= qty;
                console.log(`${qty} pices booked - ${stock} pieces left.`)
            } else {
                console.log(`we have only ${stock} pieces`)
            }
        },
        refill(qty){
            stock += qty;
            console.log(`refilled the stock - ${stock} pieces now `)
        }

        
    }
}

let iphone = createProduct("iphone", 70000);

let kitcat = createProduct("kitact", 70);


iphone.buy(10);


