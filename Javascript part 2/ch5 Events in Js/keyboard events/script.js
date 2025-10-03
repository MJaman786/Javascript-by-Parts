const input = document.getElementById("myInput");
const output = document.getElementById("output");

// Key Down Event
input.addEventListener("keydown", (e) => {
    output.textContent = `keydown → Key: ${e.key}, Code: ${e.code}`;
});

// Key Up Event
input.addEventListener("keyup", (e) => {
    output.textContent = `keyup → Key: ${e.key}, Code: ${e.code}`;
});

// Detecting Ctrl + Enter
input.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
        output.textContent = "Shortcut Detected: Ctrl + Enter";
    }
});

// clear event
const clearEvent = document.querySelector('#clear-event');
clearEvent.addEventListener('click',()=>{
    output.textContent = `Press a key to see the event details`
    input.value = ''
})