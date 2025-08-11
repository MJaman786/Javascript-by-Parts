// In JavaScript, data types can be converted in two ways:

// 🔹 1. Implicit Conversion(Type Coercion)
// 👉 JavaScript automatically converts data types when needed.

// 🔹 2. Explicit Conversion
// 👉 You manually convert using functions like Number(), String(), Boolean(), etc.

// ✅ 2. Implicit Conversion(Auto)
// 🧠 Example:
// javascript
// Copy
// Edit
console.log("5" + 2);      // "52"   => Number 2 is converted to string
console.log("5" - 2);      // 3      => String "5" is converted to number
console.log("5" * "2");    // 10     => Both strings are converted to numbers
console.log("five" * 2);   // NaN    => "five" can't be converted to a number
console.log(1 + true);     // 2      => true becomes 1
// ✅ 3. Explicit Conversion(Manual)
// 🔸 To Number
// javascript
// Copy
// Edit
Number("123");    // 123
Number("ABC");    // NaN
parseInt("123.45"); // 123
parseFloat("123.45"); // 123.45
// 🔸 To String
// javascript
// Copy
// Edit
String(100);      // "100"
(100).toString(); // "100"
// 🔸 To Boolean
// javascript
// Copy
// Edit
Boolean(0);       // false
Boolean(1);       // true
Boolean("");      // false
Boolean("hello"); // true
// ✅ 4. Code Example
// javascript
// Copy
// Edit
let a = "10";
let b = 5;

console.log(a + b);                 // "105" (string) - Implicit
console.log(Number(a) + b);         // 15 (number) - Explicit

let c = "";
console.log(Boolean(c));           // false

let d = "123abc";
console.log(Number(d));            // NaN

let e = 0;
console.log(String(e));            // "0"
// ✅ 5. Output
105
15
false
NaN
"0"
// ✅ Interview Tip:
// JavaScript automatically converts data types when needed(implicit conversion), but for more control, we use functions like Number(), String(), and Boolean() for explicit conversion.

console.log("2" + 3);      // "23" (string)