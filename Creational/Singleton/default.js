
// JavaScript has native support
const singletonDefault = require("./db");
const singletonDefault2 = require("./db");

console.log(singletonDefault === singletonDefault2);  //true