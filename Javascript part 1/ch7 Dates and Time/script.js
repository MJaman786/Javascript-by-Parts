/*
📅 What is Date in JavaScript?
JavaScript has a built-in object called Date to work with dates and times (like current time, today’s date, etc).
You create a date object using:
*/ 

let now = new Date();

console.log("Full Date-Time : " + now);
console.log("Year           : " + now.getFullYear());
console.log("Month (0-11)   : " + now.getMonth());
console.log("Date (1-31)    : " + now.getDate());
console.log("Day (0-Sunday) : " + now.getDay());
console.log("Hours (0-23)   : " + now.getHours());
console.log("Minutes        : " + now.getMinutes());
console.log("Seconds        : " + now.getSeconds());
console.log("Milliseconds        : " + now.getMilliseconds());

/*
Full Date-Time : Sat Jun 28 2025 20:40:16 GMT+0530 (India Standard Time)
Year           : 2025
Month (0-11)   : 5
Date (1-31)    : 28
Day (0-Sunday) : 6
Hours (0-23)   : 20
Minutes        : 40
Seconds        : 16
Milliseconds        : 611
*/ 

// 🛠️ You can also create a custom date:
let myBirthday = new Date("2000-01-01");
console.log(myBirthday);  // Sat Jan 01 2000

let dt = new Date(2024, 11, 25);  // (year, month, date)
console.log(dt);  // Wed Dec 25 2024

// new Date(year, monthIndex, day, hour, minute, second, millisecond)

let myDate = new Date(2003, 3, 9, 12, 30, 10);
console.log(myDate.toDateString()); // Wed Apr 09 2003
console.log(myDate.toLocaleString()); // 4/9/2003, 12:30:10 PM
console.log(myDate.toLocaleDateString()+"\n"); // 4/9/2003

let nowTime = new Date(2025, 5, 28, 12, 50);              // Create Date object
console.log(nowTime.getTime());        // Milliseconds since Jan 1, 1970
console.log(Date.now());               // Same thing, but directly from Date class

let dateTime = new Date();

// Get full weekday name
let dayName = dateTime.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    era: 'long',
    year : 'numeric'
});

console.log("Day:", dayName);               // ➤ Example: "Wednesday"
console.log("Date:", dateTime.toDateString());  // ➤ Example: "Wed Jun 19 2025"


