// ✅ 1. Rest (parameter) operator
// It bundel ups the rest all argumnets and return them

// type 1:
function numbers(...num) {
    return num
}
console.log(numbers(100, 200, 400, 600)); // [ 100, 200, 400, 600 ]
// type 2:
function addNumbers(num1, num2, ...num3) {
    return num1 + num2 + num3
}
console.log(addNumbers(100, 200, 300, 400, 600)); // 300300,400,600

// type 3: to fix this 300300,400,600 calculation
function add(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, value) => acc + value, 0)
}
// now it is calculating correctly extra argumnets 
console.log(add(100, 200, 300, 400)); // 1000 

// ✅ 2. Passing Object as argumnets
let user = { name: "Aman", skill: "Next js" };
function userFunction(myObject) {
    console.log(`Username: ${myObject.name}\nUserskill: ${myObject.skill}`);
}
console.log(userFunction(user))
// Username: Aman
// Userskill: Next js
console.log(userFunction({ name: "Mitesh", skill: "Python" }))
// Username: Mitesh
// Userskill: Python

