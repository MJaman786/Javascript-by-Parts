/*
---
## ✅ 1. What is a String?

A string is a sequence of characters enclosed in quotes.
You can use:

"double quotes"

'single quotes'

`backticks` → (for template strings)

---
*/

let str1 = "Hello";
let str2 = 'World';
let str3 = `Welcome, Aman!`;

/*
Great topic, Aman! ✅ Let's master **Strings in JavaScript** — it's a **core interview concept** and used everywhere in frontend/backend development.
## ✅ 2. String Properties and Methods

| Feature         | Description                         | Example                              | Output            |
| --------------- | ----------------------------------- | ------------------------------------ | ----------------- |
| `length`        | Returns string length               | `"Hello".length`                     | `5`               |
| `toUpperCase()` | Converts to uppercase               | `"hello".toUpperCase()`              | `"HELLO"`         |
| `toLowerCase()` | Converts to lowercase               | `"HI".toLowerCase()`                 | `"hi"`            |
| `charAt(n)`     | Character at index `n`              | `"Hello".charAt(1)`                  | `"e"`             |
| `includes()`    | Checks if string contains substring | `"Hello".includes("lo")`             | `true`            |
| `indexOf()`     | Returns index of first match        | `"World".indexOf("o")`               | `1`               |
| `replace()`     | Replaces part of string             | `"Hi Aman".replace("Aman", "Rahul")` | `"Hi Rahul"`      |
| `trim()`        | Removes extra whitespace            | `"  hi  ".trim()`                    | `"hi"`            |
| `slice()`       | Extracts a part of string           | `"abcdef".slice(1, 4)`               | `"bcd"`           |
| `split()`       | Splits string into array            | `"a,b,c".split(",")`                 | `["a", "b", "c"]` |
| `concat()`      | Joins strings                       | `"Hi".concat(" ", "Aman")`           | `"Hi Aman"`       |

---
*/

/*
✅ 3. Template Literals (Modern ES6+)
Use backticks (`) to embed variables inside strings.
*/

let name = "Aman";
let age = 21;
let msg = `My name is ${name} and I am ${age} years old.`;

console.log(msg);

/*
My name is Aman and I am 21 years old.
*/

/*
✅ 4. Code Example (All in One):
*/

let str = " Hello JavaScript ";

console.log(str.length);               // 19
console.log(str.trim());              // "Hello JavaScript"
console.log(str.toUpperCase());       // " HELLO JAVASCRIPT "
console.log(str.includes("Java"));    // true
console.log(str.indexOf("Script"));   // 12
console.log(str.slice(1, 6));         // "Hello"
console.log(str.replace("JavaScript", "World")); // " Hello World "

/*
JavaScript strings are immutable, meaning you can’t change characters inside them directly.
But you can create a new string using methods like replace(), slice(), etc.
*/

// # split() method
const mystr = "AMAN MUJAWAR";
const strArray = mystr.split(" ");
//split by words
console.log(strArray); // [ 'AMAN', 'MUJAWAR' ]
//split by characters
console.log(mystr.split("")); /*
[
  'A', 'M', 'A', 'N',
  ' ', 'M', 'U', 'J',
  'A', 'W', 'A', 'R'
]
*/
//split by limit (for words)
console.log(mystr.split(" ", 1)); // [ 'AMAN' ]

//split by limit (by charcaters )
console.log(mystr.split("", 6)); // [ 'A', 'M', 'A', 'N', ' ', 'M' ]



// # replace method
const replacedStr = mystr;
console.log(replacedStr.replace("AMAN", "AYAN")); // AYAN MUJAWAR
console.log(mystr.replace("AMAN", "ALI")); // ALI MUJAWAR
console.log(mystr.replace("AMAN", "aman")); // aman MUJAWAR
console.log(mystr.replace("AMAN", "AmAn")); // AmAn MUJAWAR


// # includes
const link = "https://chatgpt.com/c/6852a45a-48ac-800e-923b-a4bd22ee8552";
let myLink = link;
if (myLink.includes("chatgpt.com")) {
    myLink = myLink.replace("chatgpt.com", "aman.com");
    console.log(myLink);
}
console.log(link.includes("https")) // true
console.log(link.includes(" ")) // false
console.log(link.includes("/")) // true
console.log(link.includes("800")) // true




console.log((mystr.toLowerCase()).concat(" ", "AMAN"));