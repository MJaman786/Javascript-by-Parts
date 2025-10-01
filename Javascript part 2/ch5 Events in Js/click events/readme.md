# 🖱️ Mouse Events in JavaScript

Mouse events are triggered when a user interacts with the mouse (click, move, scroll, etc.).  
They help capture user actions and respond dynamically on web pages.

---

## 📌 Common Mouse Events

| Event | Description |
|-------|-------------|
| `click` | Fires when the element is clicked (press and release). |
| `dblclick` | Fires when the element is double-clicked. |
| `mousedown` | Fires when the mouse button is pressed down. |
| `mouseup` | Fires when the mouse button is released. |
| `mousemove` | Fires when the mouse pointer moves inside the element. |
| `mouseover` | Fires when the pointer enters the element (including child elements). |
| `mouseout` | Fires when the pointer leaves the element (including child elements). |
| `mouseenter` | Fires when the pointer enters the element (does **not** bubble to children). |
| `mouseleave` | Fires when the pointer leaves the element (does **not** bubble to children). |
| `contextmenu` | Fires when the right mouse button is clicked (shows context menu). |
| `wheel` | Fires when the mouse wheel is scrolled (up or down). |

---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mouse Events Example</title>
  <style>
    body { font-family: Arial; background: #f4f4f4; padding: 20px; }
    #box {
      width: 200px; height: 200px;
      background: lightblue; border: 2px solid #333;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <h2>Mouse Events Demo</h2>
  <div id="box">Hover or Click Me</div>
  <p id="output">Event Output will appear here</p>

  <script>
    const box = document.getElementById("box");
    const output = document.getElementById("output");

    // Click Event
    box.addEventListener("click", (e) => {
      output.textContent = `Event: ${e.type}`;
    });

    // Double Click Event
    box.addEventListener("dblclick", (e) => {
      output.textContent = `Event: ${e.type}`;
    });

    // Mouse Down & Up
    box.addEventListener("mousedown", (e) => {
      output.textContent = `Mouse Down on ${e.button === 0 ? "Left" : "Right"} button`;
    });

    box.addEventListener("mouseup", (e) => {
      output.textContent = `Mouse Up on ${e.button === 0 ? "Left" : "Right"} button`;
    });

    // Mouse Move
    box.addEventListener("mousemove", (e) => {
      output.textContent = `Mouse Move at X: ${e.clientX}, Y: ${e.clientY}`;
    });

    // Mouse Enter / Leave
    box.addEventListener("mouseenter", () => {
      output.textContent = "Mouse Entered the Box";
    });

    box.addEventListener("mouseleave", () => {
      output.textContent = "Mouse Left the Box";
    });

    // Context Menu
    box.addEventListener("contextmenu", (e) => {
      e.preventDefault(); // Prevent right-click menu
      output.textContent = "Right Click (Context Menu) Disabled";
    });

    // Wheel Event
    box.addEventListener("wheel", (e) => {
      output.textContent = e.deltaY < 0 ? "Scrolled Up" : "Scrolled Down";
    });
  </script>
</body>
</html>
