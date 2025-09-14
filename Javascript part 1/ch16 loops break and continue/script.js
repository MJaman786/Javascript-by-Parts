// Syntax of for loop

// ✅ for (initialization; condition; update) {
//   code block
// }

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5

let myArray = ["Apple, Banana, Mango, Pineapple, kiwi"];
for (let index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
// Apple, Banana, Mango, Pineapple, kiwi

let numbers = [100, 50, 200, 150, 20, 30];
numbers.forEach((value, index) => {
  console.log(`Index:${index} - Value:${value}`);
})
// Index:0 - Value:100
// Index:1 - Value:50
// Index:2 - Value:200
// Index:3 - Value:150
// Index:4 - Value:20
// Index:5 - Value:30


// 1. break statement is used to exit a loop or a switch immediately.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // stop the loop completely when i = 3
  }
  console.log(i);
}
// 1
// 2

// 2. continue statement is used to skip the current iteration and move to the next one.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip when i = 3
  }
  console.log(i);
}
// 1
// 2
// 4
// 5

// ✅ while Loop
// he while loop checks the condition first, and if it’s true, it runs the code block.
// If the condition is false right at the start, the loop may not run even once.
// Syntax:
// while (condition) {
//   // code to run
// }


let i = 1;

while (i <= 5) {
  console.log("Number:", i);
  i++;
}

/*
  Number: 1
  Number: 2
  Number: 3
  Number: 4
  Number: 5
*/

// ✅ do...while Loop
// The do...while loop runs the code block at least once, then checks the condition.
// So even if the condition is false, it executes once.

// syntax:
// do {
//   // code to run
// } while (condition);

let j = 6;

do {
  console.log("Number:", j);
  j++;
} while (j <= 5);
// Number: 6
