
const cart = ["shoes", "pants", "kurtas"];



createOrder(cart)
.then(function(orderId){
    console.log(orderId)
    proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
})

// producer
function createOrder(cart){
 
    const pr = new Promise(function(resolve, reject){
        // createOrder
        //validateCart
        //orderId

        if(!validaetCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err);
    }
    // logic for createOrder
        const orderId = "12345"
        if(orderId){
            setTimeout(function(){
                resolve(orderId);

            }, 5000)
          
        }
    });

    return pr;
}

function validaetCart(cart){
    return false;
}