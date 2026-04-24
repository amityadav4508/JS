// Module Pattern

/* Revealing Module Pattern mein bas ek main difference hota hai: jab aap object return karte ho, tab aap decide kar sakte ho ki kya expose karna hai aur kis naam se expose karna hai.
Wahin normal Module Pattern mein jo variables ya functions jis naam se defined hote hain, unhe aap directly usi naam se return kar dete ho. */


// iife
let Bank = (function(){
    let bankbalance = 12000;

    function checkBalance(){
        console.log(bankbalance);
    }

    function setBalance(val){
        bankbalance = val;
    }

    function withdraw(val){
        if(val <= bankbalance){
            bankbalance -= val;
            console.log(bankbalance);
        }
    }

    return{
        checkBalance,
        setBalance,
        withdraw

    }
})();


// Bank.withdraw(11000)
Bank.setBalance(11000)
Bank.checkBalance()