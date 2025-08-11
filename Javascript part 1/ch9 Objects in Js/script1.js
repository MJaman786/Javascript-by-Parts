// 1. Object Literal Method

/*
📌 Definition:
Methods defined directly inside an object using {}.

📌 Use Case:
Good for small, single objects.
When you don’t need to create multiple copies.

*/

let student = {
  name: "Aman",
  age: 21,
  gmail: "amanmujawar@gmail.com"
};

console.log(student.name);
console.log(student["name"]);

student.check = function () {
    let result = (this.age>18) ? 'You can vote' : 'You cannot vote'
    console.log(result);
    
}

console.log(student.check());

// 2. Constructor Function Methods

/*
📌 Definition:
Functions that are used to create multiple similar objects.
They are called with the new keyword.

📌 Use Case:
Good when you need many objects with the same structure.
Saves writing the same code repeatedly.
*/ 

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, I am ${this.name}`);
  };
}

let s1 = new Student("Aman", 21);
let s2 = new Student("Ravi", 22);

s1.greet(); // Hello, I am Aman

// 
