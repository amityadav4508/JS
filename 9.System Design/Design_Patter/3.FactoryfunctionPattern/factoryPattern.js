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
            }
        },

        
    }
}