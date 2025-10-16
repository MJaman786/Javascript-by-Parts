````markdown
# 📘 Object-Oriented Programming (OOP) in JavaScript

## 🧠 Introduction

Object-Oriented Programming (**OOP**) is a programming paradigm that uses **"objects"** as its primary building blocks. These objects can contain both **data** (in the form of **properties**) and **code** (in the form of **methods**).

In JavaScript, OOP is primarily achieved using **classes** and **prototypes**. The core idea is to structure code by modeling real-world entities or concepts.

### Key Principles of OOP

| Principle | Simple Explanation |
| :--- | :--- |
| **Encapsulation** | Bundling data (properties) and methods that operate on the data into a single unit (the object/class), often hiding internal details. |
| **Inheritization** | A mechanism where a new class (subclass/child) can inherit properties and methods from an existing class (superclass/parent). |
| **Polymorphism** | The ability of an object to take on many forms; typically, a single interface (method name) can be used for different underlying data types or classes. |
| **Abstraction** | Hiding the complex implementation details and showing only the essential features of the object to the user. |

---

## 💡 Common Use Cases

OOP in JavaScript is fundamental for creating well-structured, maintainable, and scalable applications.

* **UI Components:** Creating reusable components (like a `Button`, `Modal`, or `UserCard`) where each component is an object with its own state (properties) and behavior (methods).
* **Game Development:** Modeling game entities like `Player`, `Enemy`, `Weapon`, each inheriting base properties from a common `GameObject` class.
* **Data Structures:** Implementing complex data structures like `Stack`, `Queue`, or `LinkedList` where methods like `push`, `pop`, `enqueue`, and `dequeue` are encapsulated within the class.
* **API Client Libraries:** Building classes like `HttpClient` or `AuthService` to manage network requests and authentication logic in an organized way.

---

## ⚙️ Syntax and Explanation (Classes)

Modern JavaScript uses the **`class`** keyword (introduced in ES6) as syntactic sugar over JavaScript's existing prototype-based inheritance.

### Class Definition Structure

A class is a blueprint for creating objects.

```javascript
class ClassName {
  // 1. Constructor: A special method for creating and initializing an object created with a class.
  constructor(param1, param2) {
    this.property1 = param1; // Instance property
    this.property2 = param2; // Instance property
  }

  // 2. Methods: Functions that belong to the class/object.
  methodName(arg) {
    // Logic goes here
    return this.property1 + arg;
  }

  // 3. Static Methods: Methods called on the class itself, not on an instance.
  static staticMethod() {
    return 'This is a class-level operation.';
  }
}
````

### Important Methods and Keywords (Table)

| Item | Type | Description |
| :--- | :--- | :--- |
| `class` | Keyword | Declares a new class. |
| `constructor()` | Method | The method called when a new object is created (`new ClassName(...)`). Used for initial setup. |
| `this` | Keyword | Refers to the current instance of the class (the object being created). |
| `extends` | Keyword | Used in class declarations to create a class that is a child of another class (inheritance). |
| `super()` | Function | Calls the constructor of the parent class. Must be used inside the child's constructor. |
| `static` | Keyword | Defines a method or property as belonging to the class itself, not to its instances. |

-----

## 💻 Example Code

### Basic Usage: Creating and Instantiating a Class

This example demonstrates defining a simple class and creating objects (instances) from it.

```javascript
// Define the Car class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    console.log(`${this.make} ${this.model} is starting!`);
  }

  stop() {
    this.isRunning = false;
    console.log(`${this.make} ${this.model} is stopping.`);
  }

  getInfo() {
    return `A ${this.year} ${this.make} ${this.model}. Running: ${this.isRunning}`;
  }
}

// Create new Car objects (instances)
const myCar = new Car('Toyota', 'Camry', 2022);
const yourCar = new Car('Honda', 'Civic', 2020);

// Use the methods
myCar.start();
// Output: Toyota Camry is starting!

console.log(myCar.getInfo());
// Output: A 2022 Toyota Camry. Running: true

yourCar.stop();
// Output: Honda Civic is stopping.
```

### Advanced Usage: Inheritance and Static Methods

This example illustrates how to use **inheritance** to create a specialized class and a **static method** for class-level functionality.

```javascript
// Parent Class
class Vehicle {
  constructor(wheels) {
    this.wheels = wheels;
  }

  // Common method
  printWheels() {
    console.log(`This vehicle has ${this.wheels} wheels.`);
  }
  
  // Static method - called on the class itself, not on an instance
  static getVehicleType() {
      return 'Generic Transportation Device';
  }
}

// Child Class - inherits from Vehicle
class ElectricCar extends Vehicle {
  constructor(make, batteryCapacity) {
    // Call the parent's constructor with the 'wheels' parameter
    super(4); 
    this.make = make;
    this.batteryCapacity = batteryCapacity; // New property
  }

  // New method (Polymorphism: could override a parent method if it had the same name)
  charge(percentage) {
    console.log(`${this.make} is charging up to ${percentage}% capacity.`);
  }
}

// Inheritance in action
const tesla = new ElectricCar('Tesla', '100 kWh');
tesla.printWheels(); 
// Output: This vehicle has 4 wheels. (Inherited from Vehicle)

tesla.charge(80);
// Output: Tesla is charging up to 80% capacity. (New method)

// Static method usage
console.log(Vehicle.getVehicleType());
// Output: Generic Transportation Device
// console.log(tesla.getVehicleType()); // This would throw an error!
```

-----

## ⚖️ Comparison Table: Classes vs. Prototypes

While the `class` syntax is the modern way to do OOP in JavaScript, it's crucial to understand that JavaScript is fundamentally a **prototype-based language**. Classes are just a cleaner way to write prototype-based code.

| Feature | ES6 `class` Syntax | Pre-ES6 Constructor/Prototype |
| :--- | :--- | :--- |
| **Structure** | Uses the `class` keyword, `constructor()`, and defined methods. | Uses a regular function for the constructor and assigns methods to its `.prototype`. |
| **Readability** | High; looks familiar to Java/C++ programmers (less boilerplate). | Lower; more manual setup of prototype chain required. |
| **Inheritance** | Achieved with the `extends` keyword and `super()` function. | Achieved manually by setting the prototype chain (e.g., `Child.prototype = Object.create(Parent.prototype)`). |
| **Primary Use** | Modern, recommended way to define blueprints for objects. | Less common now, but essential to understanding JavaScript's underlying mechanism. |

-----

## 🧾 Summary

Object-Orientled Programming in JavaScript provides a powerful structure for developing complex applications. By using the **`class`** keyword, developers can leverage **encapsulation**, **inheritance**, and **polymorphism** to model real-world concepts effectively. This leads to code that is more **modular**, **maintainable**, and easier to scale. While the syntax is class-based, it ultimately relies on JavaScript's underlying **prototypal inheritance** system, which defines how objects share properties and methods. Mastering OOP principles in JavaScript is essential for modern web development.

```
```