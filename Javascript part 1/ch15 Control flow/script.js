// Control flow is the order in which your JavaScript code executes.
// By default, JavaScript runs from top to bottom,
// but you can change this using decision-making, loops, and functions.

let age = 16;
if (age > 18) {
    console.log("You can drive");
} else {
    age = 19; // i uppdate the age 
    console.log("You can't drive");
}
// You can't drive

// short hand
let result = (age > 18) ? "You can drive" : "You can't drive";
console.log(result); // You can drive

// switch case:
let day = 2; // Tuesday

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Select between 1 - 7");
        break;
}

// example 1: login
let userLogged = "amanmujawar@gmail.com"
if (userLogged) {
    console.log(`User has logged in by name: ${userLogged}`);
}else{
    console.log("User has't logged.");
}
// User has logged in by name: amanmujawar@gmail.com

// truth values: 
// true, "Any String", [Enpty_Array], {Empty_Object}, function(){ empty function } 

// false values:
// false, "", 0, -0, null, undefined, NaN


// 3. nullish coalescent operator (??)
// it only works with null and undefined 
let username = null ?? "Default User"
console.log(username); // Default User


