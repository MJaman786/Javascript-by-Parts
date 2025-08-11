// JavaScript has two main types of data:

// 🔹 1. Primitive Data Types (stored by value)
// Type	Example
// Number	let a = 10;
// String	let s = "Aman";
// Boolean	let flag = true;
// Undefined	let x;
// Null	let y = null;
// BigInt	let big = 123n;
// Symbol	let sym = Symbol("id");

// 🔸 These are immutable (cannot be changed directly).

// 🔹 2. Non-Primitive (Reference) Data Types
// Type	Example
// Object	let obj = {name: "Aman"};
// Array	let arr = [1, 2, 3];
// Function	function greet() {}

// 🔸 These are mutable and stored by reference in memory.

// ✅ Code Example:
javascript
Copy
Edit
let name = "Aman";        // String
let age = 21;             // Number
let isStudent = true;     // Boolean
let city;                 // Undefined
let salary = null;        // Null
let bigNum = 9007199254740991n; // BigInt
let id = Symbol("id");    // Symbol

let person = { name: "Aman", age: 21 }; // Object
let scores = [85, 90, 95];              // Array
function greet() {                      // Function
  return "Hello";
}
// ✅ Output (typeof)

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof isStudent);// boolean
console.log(typeof city);     // undefined
console.log(typeof salary);   // object (✅ null is a special case)
console.log(typeof bigNum);   // bigint
console.log(typeof id);       // symbol
console.log(typeof person);   // object
console.log(typeof scores);   // object (arrays are also objects)
console.log(typeof greet);    // function

// ✅ 2. ECMA Standards (Simple Interview Answer)
// 🔹 What is ECMAScript (ECMA)?
// ECMAScript (short: ES) is the official standard for JavaScript. It defines how JavaScript should work.

// 🔹 Key ECMA Versions:
// Version	Year	Features
// ES5	2009	strict mode, JSON, Array.forEach()
// ES6 (ES2015)	2015	let, const, arrow functions, classes, promises, template literals, modules
// ES7 to ES14	2016-2023	Async/await, optional chaining (?.), nullish coalescing (??), BigInt, etc.

// ✅ Interview Tip:
// JavaScript follows the ECMAScript standard, and most modern features like let, const, arrow functions, and async/await came from ES6 and above.