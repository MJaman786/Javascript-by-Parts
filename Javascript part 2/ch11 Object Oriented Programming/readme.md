````markdown
# 📘 Object-Oriented Programming (OOP) in JavaScript

## 🧠 Introduction

**Object-Oriented Programming (OOP)** is a programming paradigm that structures code into reusable units called **objects**, which represent real-world entities.  
Each object contains **properties** (data) and **methods** (functions) that operate on that data.

JavaScript is **prototype-based**, but it fully supports OOP principles such as:
- **Encapsulation** — bundling data and methods together
- **Inheritance** — reusing properties and methods of existing objects
- **Polymorphism** — methods behaving differently based on the object
- **Abstraction** — hiding complex details and showing only essential features

---

## 💡 Common Use Cases

OOP in JavaScript is widely used for:

- Building **web applications** with reusable components (e.g., React, Vue)
- Designing **game objects** (like players, enemies, items)
- Creating **data models** (for APIs, databases, or UI states)
- Organizing **large-scale applications** for better maintainability

---

## ⚙️ Syntax and Explanation

You can create objects and classes in JavaScript in multiple ways:

### 1. Using Object Literals
```js
const user = {
  name: "Aman",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet();
````

### 2. Using Constructor Functions

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
}

const person1 = new Person("Aman", 25);
person1.introduce();
```

### 3. Using ES6 Classes

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const user1 = new Person("Aman", 25);
user1.greet();
```

---

## 🧩 Important OOP Concepts and Terms

| Concept       | Description                                              | Example                       |
| ------------- | -------------------------------------------------------- | ----------------------------- |
| Class         | Blueprint for creating objects                           | `class Car {}`                |
| Object        | Instance of a class                                      | `const car1 = new Car()`      |
| Constructor   | Method that initializes new objects                      | `constructor()`               |
| Inheritance   | Child class inherits properties/methods of parent        | `class Dog extends Animal {}` |
| Encapsulation | Protecting data using access modifiers or closures       | Private variables using `#`   |
| Polymorphism  | Redefining a method for different objects                | Method overriding             |
| Abstraction   | Hiding internal details and exposing only necessary info | Abstract classes or functions |

---

## 💻 Example Code (Basic and Advanced)

### 🔹 Basic Example — Class and Object

```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Tesla", "Model S");
car1.displayInfo();
```

### 🔹 Advanced Example — Inheritance and Method Overriding

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  // Method overriding
  speak() {
    console.log(`${this.name} barks!`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy barks!
```

### 🔹 Encapsulation using Private Fields

```js
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500
```

---

## 🧮 Table: Common Object Methods

| Method                          | Description                             | Example                           |
| ------------------------------- | --------------------------------------- | --------------------------------- |
| `Object.keys(obj)`              | Returns array of keys                   | `Object.keys(user)`               |
| `Object.values(obj)`            | Returns array of values                 | `Object.values(user)`             |
| `Object.entries(obj)`           | Returns array of [key, value] pairs     | `Object.entries(user)`            |
| `Object.assign(target, source)` | Copies properties to target object      | `Object.assign({}, user)`         |
| `Object.create(proto)`          | Creates new object with given prototype | `Object.create(Person.prototype)` |

---

## ⚖️ Comparison Table: OOP vs Functional Programming

| Feature          | OOP (Object-Oriented)                    | Functional Programming                  |
| ---------------- | ---------------------------------------- | --------------------------------------- |
| Core Unit        | Object                                   | Function                                |
| State Management | Uses mutable state (via objects)         | Prefers immutability                    |
| Reusability      | Achieved through inheritance and classes | Achieved through higher-order functions |
| Focus            | Data + Behavior (together)               | Data transformation                     |
| Example          | `class Car { drive() {} }`               | `const drive = (car) => ...`            |

---

## 🧾 Summary

* **OOP in JavaScript** is a structured way to organize code into objects and classes.
* It makes large applications **more modular, maintainable, and scalable**.
* Core principles: **Encapsulation**, **Inheritance**, **Polymorphism**, and **Abstraction**.
* Modern JS supports **class-based OOP** (ES6) and **prototype-based inheritance** under the hood.
* For real-world applications (like UI components, models, and services), OOP provides a powerful and intuitive foundation.

> 🧠 Tip: Use OOP when your project has many related entities that share common behavior — it keeps your code organized, reusable, and easier to understand.

```
```
