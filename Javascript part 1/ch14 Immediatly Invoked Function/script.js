// In JavaScript, an Immediately Invoked Function Expression (IIFE) is a function 
// that runs immediately after it is defined.
// ()();

// ✅ synax : (function(){
//  code...
// })();

// ✅ 1. Passing argumnet in IIFE
(function usergreet(name) {
    console.log(`Hello ${name}!`);
})("Aman");
// Hello Aman!

// ✅ 2. Arrow Function IIFE 
(() => {
  console.log("Arrow IIFE works too!");
})(); // Arrow IIFE works too!
