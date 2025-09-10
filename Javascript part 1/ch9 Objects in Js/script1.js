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

//  Built-in Object Methods
// 1. Creating objects
// Object.create(proto) → creates a new object with a specified prototype.

const animal = { type: "mammal" };
const dog = Object.create(animal);
dog.breed = "Labrador";
console.log(dog.type); // "mammal"

// 2. Retrieving keys, values, entries
// Object.keys(obj) → returns an array of keys.
// Object.values(obj) → returns an array of values.
// Object.entries(obj) → returns an array of [key, value] pairs.

const person = { name: "Aman", age: 21 };
console.log(Object.keys(person));   // ["name", "age"]
console.log(Object.values(person)); // ["Aman", 21]
console.log(Object.entries(person));// [["name","Aman"],["age",21]]

// 3. Assigning / copying
// Object.assign(target, source) → copies properties.
// structuredClone(obj) → deep clones an object (modern browsers).

const a = { x: 1 };
const b = { y: 2 };
const merged = Object.assign({}, a, b);
console.log(merged); // { x:1, y:2 }

// 4. Defining & modifying properties
// Object.defineProperty(obj, key, descriptor) → defines property with settings (writable, enumerable, configurable).
// Object.defineProperties(obj, descriptors) → multiple at once.

const car = {};
Object.defineProperty(car, "brand", { value: "Tesla", writable: false });
console.log(car.brand); // Tesla
car.brand = "BMW";
console.log(car.brand); // Still Tesla (not writable)

// 5. Sealing & freezing
// Object.seal(obj) → no new properties, but existing can change.
// Object.freeze(obj) → no new properties & no changes allowed.
// Object.isSealed(obj) / Object.isFrozen(obj) → check status.

const user = { name: "Aman" };
Object.freeze(user);
user.name = "Raj"; 
console.log(user.name); // "Aman" (cannot change)

// 6. Prototype related
// Object.getPrototypeOf(obj) → gets prototype.
// Object.setPrototypeOf(obj, proto) → sets prototype.

// 7. Checking properties
// obj.hasOwnProperty(key) → checks if key exists directly on object.
// Object.hasOwn(obj, key) → modern alternative to above.

const book = { title: "JS Guide" };
console.log(book.hasOwnProperty("title")); // true

// 🔹 Custom Methods (inside objects)
// You can also define methods inside objects:

const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log(calculator.add(2, 3)); // 5
console.log(calculator.multiply(4, 5)); // 20


// ✅ In short:
// Built-in methods (Object.keys, Object.assign, Object.freeze etc.) help you manipulate and inspect objects.
// Custom methods are functions defined inside objects to perform actions.
