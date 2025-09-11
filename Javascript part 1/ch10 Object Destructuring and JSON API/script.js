// ✅ 1. Simple Destructuring 
const person = {
  name: "Aman",
  age: 25,
  city: "Pune"
};

// Destructuring
const { name, age } = person;

console.log(name); // Aman
console.log(age);  // 25

// # note: 
// 1. By default, variable names must match object keys.
// 2. If you want a different variable name, use key: newVarName.

// ✅ 2. Using different variable names rather than default key name
const {name: userName, age: userAge} = person;
console.log(userName); // Aman
console.log(userAge);  // 25

