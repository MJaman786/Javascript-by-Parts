let myDate = new Date(2025, 9, 4, 5, 45, 4);

console.log(myDate.toString()); 
// Sat Oct 04 2025 05:45:04 GMT+0530 (India Standard Time)

// 1. Day and Date
let myCustom1 = myDate.toLocaleString('en-US', {
    dateStyle: "full"
})
console.log(myCustom1.toString()); // Saturday, October 4, 2025

// 2. Time 
let myCustom2 = myDate.toLocaleString('en-US', {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
})
console.log(myCustom2.toString()); // 05:45:04 AM

let myCustom3 = myDate.toLocaleString('en-US', {
    timeStyle:"long",
    hour12:true
})
console.log(myCustom3.toString()); // 5:45:04 AM GMT+5:30

// Custom Current Date
let myDate = new Date().toLocaleString('en-US',{
    hour24: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    month: 'short',
    year: 'numeric'
});

console.log(myDate) // Nov 2025 Sun, 12:23:37 PM
