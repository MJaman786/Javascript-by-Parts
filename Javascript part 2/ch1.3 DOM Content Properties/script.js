// Select elements
const box = document.getElementById("box");
const para = document.getElementById("para");
const input = document.getElementById("myInput");

const showBtn = document.getElementById("showBtn");
const changeBtn = document.getElementById("changeBtn");

// ✅ Show current values
showBtn.addEventListener("click", () => {
  // innerHTML: returns HTML with tags
  console.log("innerHTML:", box.innerHTML); // "Hello <b>World</b>"

  // innerText: returns visible text only (ignores hidden elements, respects CSS)
  console.log("innerText:", box.innerText); // "Hello World"

  // textContent: returns all text, even hidden (doesn’t care about CSS)
  console.log("textContent:", box.textContent); // "Hello World"

  // value: for inputs, returns the current value
  console.log("value:", input.value); // "Default text"
});

// ✅ Change values
changeBtn.addEventListener("click", () => {
  // Change HTML (can add tags)
  box.innerHTML = "Changed to <i>Italic</i>";

  // Change plain text
  para.innerText = "Paragraph changed with innerText";

  // Change text content
  box.textContent = "This removes all HTML tags";

  // Change input value
  input.value = "New Input Value";
});


// ⚠️ Quick Note:

// 1. Use ' innerHTML ' if you need to insert HTML code.
// 2. Use ' innerText ' or ' textContent ' if you want just text.
// 3. Use ' value ' only for inputs/forms.