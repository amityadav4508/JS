// 🔥 Encapsulation – Use Cases
// 🔹 1. Counter (Most Common)
// 👉 Value ko direct access se bachana

function counter() {
    let count = 0;

    return {
        increment: () => ++count,
        get: () => count
    };
}

let c = counter();
c.increment(); // 1
c.increment(); // 2
c.get();       // 2
// 👉 count private hai (direct access nahi)


// 🔹 2. Bank Account (Real-world 💳)
function bankAccount() {
    let balance = 1000; // private

    return {
        deposit: (amt) => balance += amt,
        withdraw: (amt) => balance -= amt,
        getBalance: () => balance
    };
}

let acc = bankAccount();

acc.deposit(500);
acc.getBalance(); // 1500
// 👉 Balance ko direct change nahi kar sakte

// 🔹 3. Form Validation / Input Control
// 👉 Data ko validate karke hi allow karna

function createUser() {
    let password = "12345";

    return {
        checkPassword: (input) => input === password
    };
}
// 👉 Password hidden hai


// 🔹 4. Configuration Settings
// 👉 Important settings ko protect karna

function config() {
    let apiKey = "SECRET_KEY";

    return {
        getKey: () => apiKey
    };
}

// 🔹 5. Module Pattern (Advanced 🔥)
// 👉 Large apps mein data hide + organize

const Module = (function () {
    let data = "hidden";

    return {
        getData: () => data
    };
})();