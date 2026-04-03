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