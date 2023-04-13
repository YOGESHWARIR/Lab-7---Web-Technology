var calculator = require('./calculator');
const readline = require("readline-sync");

let a = Number(readline.question());
let b = Number(readline.question());
 
console.log("Addition of two numbers: "+calculator.add(a,b));
console.log("Subtraction of two numbers: "+calculator.subtract(a,b));
console.log("Multiplication of two numbers: "+calculator.multiply(a,b));
console.log("Division of two numbers: "+calculator.division(a,b));
console.log("Modulus of two numbers: "+calculator.modulo(a,b));