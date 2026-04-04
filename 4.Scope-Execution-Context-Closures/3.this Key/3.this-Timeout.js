// setTimeout + this
// 🔹 Problem Code
const user = {
  name: "Amit",
  greet: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user.greet();
// ❌ Output:
// 👉 undefined

// 🔍 Reason

// greet() → method call → this = user ✅
// setTimeout ke andar function → normal function ❌
// Normal function call → this = window

// 👉 Isliye:
// this = window
// window.name → undefined

// ✅ 1. Arrow Function (Best)
setTimeout(() => {
  console.log(this.name);
}, 1000);

// 👉 this = user

// ✅ 2. bind(this)
setTimeout(function () {
  console.log(this.name);
}.bind(this), 1000);

// ✅ 3. self = this
const self = this;
setTimeout(function () {
  console.log(self.name);
}, 1000);

// ⚡ Golden Rule
// 👉"setTimeout ke andar normal function apna this lose kar deta hai"
// 🎯 One Line (Interview)
// "Callbacks like setTimeout execute as normal functions, so their this becomes window (or undefined in strict mode)."


// in JavaScript, the behavior of this with setTimeout can be tricky because of how function calls are handled:

// 🕑 Default binding: When you pass a regular function to setTimeout, it’s invoked by the global object (window in browsers, global in Node). That means inside the callback, this usually refers to the global object, not the object you might expect.

// 📦 Example:

const obj = {
  name: "Amit",
  greet: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};
obj.greet(); // undefined, because `this` points to window/global


// Fixing it:

// Use arrow functions, which don’t have their own this and instead inherit it from the surrounding scope:

setTimeout(() => {
  console.log(this.name); // Correctly logs "Amit"
}, 1000);


// Or explicitly (स्पष्ट रूप से) bind this:

setTimeout(function() {
  console.log(this.name);
}.bind(this), 1000);


// ⚡ Key takeaway:  
// With setTimeout, this loses its original object context unless you preserve it using arrow functions, .bind(), or by storing a reference like const self = this.