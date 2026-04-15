

// CreateOrder API
// ProccedToPayment API
// order summery page
//update the wallet

// Callback hell code are unreadable & unmaintainable this structure also know as pyramid of doom

api = "https://randomuser.me/api/"

const cart = ["shoes", "cloths", "kurta"]

//  Callback hell
api.creteOrder(cart, function () { 
    api.proceedToPayment(function () {  
        api.showOrderSummary(
             function () { 
                api.updateWallet()
            }
        ) 
    })
 })

// Inversion of control




 


