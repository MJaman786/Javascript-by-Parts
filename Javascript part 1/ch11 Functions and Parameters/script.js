// ✅ Function Def:
// A function in JavaScript is a block of reusable code designed to perform a specific task.
// Instead of writing the same code multiple times, you can wrap it inside a function and call it whenever needed.

// ✅ Function Syntax
// function functionName(parameter_1, parameter2){
    // code
// }

// ✅ 1. Normal function
function addNumbers(num1, num2){
    console.log(num1 + num2);
}
addNumbers(2, 4) // 6

// ✅ 2. Variable named functions
let greet = function (user) {
    console.log(`Hello ${user}! How are you`)
}
greet("Aman"); // Hello Aman! How are you

// ✅ 3. Arrow Function
let mulNumbers = (a, b) => a * b; // Inplicit return
console.log(mulNumbers(2, 4)); // 8

let subNumbers = (a, b) => { 
    return a - b // Explicit return 
}
console.log(subNumbers(10, 5)) // 5

// ✅ 4. Immediately Invoked Function
function imd() {
    console.log("This function is immediatly caled")
}
(function() {
  imd(); // This function is immediatly caled
})();


// ✅ 5. Passing Default values
// if users dont pass any argumnet at calling then the default value is user
function normFunc(uesrName = "user") {
    console.log(`${uesrName} has logged in`);
}
normFunc(); // user has logged in
normFunc("Aman"); // Aman has logged in