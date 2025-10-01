# 🎯 JavaScript Events

## 📌 What are Events?
Events are actions or occurrences that happen in the browser and can be detected by JavaScript.  
Examples: clicking a button, pressing a key, submitting a form, hovering the mouse, etc.  

With events, we can make web pages **interactive**.

---

## 📌 Syntax of Events

### 1. Inline Event
Directly written inside HTML.
```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

### 2. Event Property
Assign a function to an element's event property in JavaScript.
``` bash
<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById("myBtn");
  btn.onclick = function () {
    alert("Button Clicked!");
  };
</script>
```

### 3. addEventListener (✅ Recommended)
Most modern way to attach events.
``` bash
<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", function () {
    alert("Button Clicked!");
  });
</script>
```

### 📌 Common Event Types
* Mouse Events → click, dblclick, mouseover, mouseout
* Keyboard Events → keydown, keyup, keypress
* Form Events → submit, change, focus, blur
* Window Events → load, resize, scroll

# 🎯 JavaScript addEventListener with `event` Parameter

## 📌 What is `addEventListener`?
`addEventListener` is the modern way to attach an event to an element in JavaScript.  

Syntax:
```js
element.addEventListener(eventType, callbackFunction);

📌 What is the event parameter?

When an event occurs (like a click), the browser automatically creates an event object that contains information about that action.

👉 If we write:

element.addEventListener("click", function(e) {
  console.log(e);
});


e (or event) is the event object.

It gives details like:

Which element was clicked

Mouse position

Which key was pressed

Whether CTRL/SHIFT was held, etc.

📌 Example: Button Click
<button id="btn">Click Me</button>

<script>
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", function(e) {
    console.log("Event object:", e);        // full event info
    console.log("Event type:", e.type);     // "click"
    console.log("Target element:", e.target); // the <button> itself
    console.log("Mouse X:", e.clientX);     // X coordinate of click
    console.log("Mouse Y:", e.clientY);     // Y coordinate of click
  });
</script>

📌 Example: Keyboard Event
<input type="text" id="inputBox" placeholder="Type something...">

<script>
  const input = document.querySelector("#inputBox");

  input.addEventListener("keydown", function(e) {
    console.log("Key pressed:", e.key);     // e.g. "a", "Enter"
    console.log("Key code:", e.keyCode);    // numeric key code
    console.log("Ctrl pressed?:", e.ctrlKey); // true/false
  });
</script>

📌 Common Properties of event object
Property	Description
e.type	Type of event (click, keydown, etc.)
e.target	The element that triggered the event
e.currentTarget	The element the event listener is attached to
e.clientX / e.clientY	Mouse click position (X/Y) relative to viewport
e.key	Key pressed (like "Enter", "a")
e.keyCode	Numeric code of key pressed
e.altKey / e.ctrlKey / e.shiftKey	true/false if modifier keys were pressed
e.preventDefault()	Prevents default action (e.g., stop form from submitting)
e.stopPropagation()	Stops event bubbling (prevents event from going up to parent elements)
📌 Example: Prevent Default Form Submit
<form id="myForm">
  <input type="text" placeholder="Enter something" required>
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.querySelector("#myForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload
    console.log("Form submission prevented!");
  });
</script>


✅ Summary

addEventListener lets you attach multiple events to an element.

The event object (e) gives details about what happened.

Use e.preventDefault() and e.stopPropagation() for advanced control.

```
