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