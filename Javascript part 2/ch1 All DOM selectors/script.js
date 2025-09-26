// 1. getElementById - Selects one element by its ID
let title = document.getElementById("main-title");
title.style.color = "blue"; // changes text color
console.log("ID Selector:", title);

// 2. getElementsByClassName - Selects multiple elements by class
let paragraphs = document.getElementsByClassName("text");
console.log("Class Selector:", paragraphs);
paragraphs[0].style.fontSize = "20px"; // first <p>
paragraphs[1].style.color = "green";   // second <p>

// 3. getElementsByTagName - Selects all elements with a specific tag
let listItems = document.getElementsByTagName("li");
console.log("Tag Selector:", listItems);
listItems[2].textContent = "🍋 Lemon"; // changes Mango to Lemon

// 4. querySelector - Selects the FIRST element that matches a CSS selector
let firstPara = document.querySelector(".text");
console.log("QuerySelector:", firstPara);
firstPara.classList.add("highlight"); // adds red highlight style

// 5. querySelectorAll - Selects ALL elements that match a CSS selector
let allParas = document.querySelectorAll(".text");
console.log("QuerySelectorAll:", allParas);
allParas.forEach(p => p.style.backgroundColor = "lightyellow");

// 
let changed = false;
btn = document.querySelector('button');
btn.onclick = function () {
    if (changed) {
        allParas[0].innerText = 'This is the first paragraph.'
        changed = false;
    } else {
        allParas[0].textContent = 'Changed by onclick event'
        changed = true;
    }
}