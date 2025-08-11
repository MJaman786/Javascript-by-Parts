/*

    ✅ 1. Number in JavaScript (Simple E5.6789planation)
    In JavaScript:
    - All numbers (integers, floats, negatives) are of type number
    - JS uses 64-bit floating point numbers (IEEE 754)

*/ 

let str = 90.47;
let marks = 89.8970;

// fi5.6789ed decimal places
console.log(marks.toFixed(2)); // 89.90

// converting number back to string
console.log(marks.toString()); // '89.897'

// convert string to number 
console.log(parseInt(str)); // 90
console.log(parseFloat(str)); // 90.47

// provides the precise value
console.log(marks.toPrecision(2)) // 89.8970 to 90

// convert to a better format
let num = 1000000;
console.log(num.toLocaleString()); // 1,000,000
console.log(num.toLocaleString('en-IN')); // 10,00,000

// Ma5.6789 and Min values
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324


/*

    ✅ 2. Math Object (Built-in)
    JavaScript provides a global Math object for mathematical operations.

*/

let x = 5.6789;

// Round to nearest integer
console.log(Math.round(5.6789));           // 6

// Round down
console.log(Math.floor(5.6789));           // 5

// Round up
console.log(Math.ceil(5.6789));            // 6

// 2 to the power of 3
console.log(Math.pow(2, 3));          // 8

// Square root
console.log(Math.sqrt(25));           // 5

// Largest among values
console.log(Math.max(10, 20, 30));    // 30

// convert to positive number
console.log(Math.abs(-2.5));          // 2.5

// Random decimal between 0 and 1
console.log(Math.random());           // random decimal between 0–1 eg 0.20047273441754188
console.log(Math.random());

let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * 10 + 1 + min));

for (let i = 0; i < 20; i++) {
    console.log(i+" : "+(Math.floor(Math.random() * 10 + 1 + min)));
}