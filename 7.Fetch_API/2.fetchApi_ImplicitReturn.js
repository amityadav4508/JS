/* Implicit return ka matlab hota hai: function bina return keyword likhe hi value return kar deta hai.

Ye mostly arrow functions (=>) me hota hai. */

fetch("https://randomuser.me/api/?results=5")
.then((raw)=> raw.json())
.then((data)=> console.log(data.results));