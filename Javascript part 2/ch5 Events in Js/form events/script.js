const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const output = document.getElementById("output");

// Submit Event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    output.textContent = `Form Submitted → Username: ${username.value}, Email: ${email.value}`;
});

// Reset Event
form.addEventListener("reset", () => {
    output.textContent = "Form Reset!";
});

// Input Event
username.addEventListener("input", () => {
    output.textContent = `Typing Username: ${username.value}`;
});

// Change Event
email.addEventListener("change", () => {
    output.textContent = `Email changed to: ${email.value}`;
});

// Focus Event
username.addEventListener("focus", () => {
    output.textContent = "Username field is focused";
});

// Blur Event
username.addEventListener("blur", () => {
    output.textContent = "Username field lost focus";
});