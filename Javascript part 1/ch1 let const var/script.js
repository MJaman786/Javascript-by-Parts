// In JavaScript, variables can be declared using var, let, or const.
// var: function-scoped or globally-scoped, can be redeclared and updated.
// let: block-scoped, can be updated but not redeclared in the same scope.
// const: block-scoped, cannot be updated or redeclared; must be initialized at declaration.

const pi = 3.14;
let radius = 5;
var area = pi * radius * radius;
console.log("Area of the circle:", area);

let userName = "John";
let userAge = 30;
let password = "securePassword123";

console.table([userName, userAge, password]);

const university = {
    students: [
        { name: "Alice", course: "Computer Science" },
        { name: "Bob", course: "Physics" }
    ],
    teachers: [
        { name: "Dr. Smith", subject: "Math" },
        { name: "Prof. Johnson", subject: "History" }
    ]
};

console.table(university.students[0]);