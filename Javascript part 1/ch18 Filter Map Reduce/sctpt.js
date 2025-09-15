// ✅ 1. filter(callback(element, index, array))
// 👉 Creates a new array with only the elements that pass the condition.

// Arguments:
// element → the current item in the array
// index → the index of the current item
// array → the original array

let numbers = [10, 25, 30, 45, 50];

let result = numbers.filter((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Full array: ${array}`);
    return element > 30; // condition
});
console.log(result); // [45, 50]



// ✅ 2. map(callback(element, index, array))
// 👉 Creates a new array by transforming every element.
// Arguments:
// element → the current item
// index → index of the current item
// array → the original array

let mapResult = numbers.map((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Full array: ${array}`);
    return element * 2; // transform
});

console.log(mapResult); // [4, 8, 12]



// ✅ 3. reduce(callback(accumulator, currentValue, index, array), initialValue)
// 👉 Reduces everything into one single value.
// Arguments:
// accumulator → result carried forward
// currentValue → the current item
// index → index of the current item
// array → the original array
// initialValue → optional starting value for accumulator

let reduceResult = numbers.reduce((acc, currentValue, index, array) => {
    console.log(`Acc: ${acc}, CurrentValue: ${currentValue}, Index: ${index}, Array: ${array}`);
    return acc + currentValue;
}, 0); // initial value = 0

console.log(reduceResult); // 30

let students = [
    { id: 1, name: "Aman", marks: 85 },
    { id: 2, name: "Mitesh", marks: 45 },
    { id: 3, name: "Omkar", marks: 72 },
    { id: 4, name: "Sahil", marks: 30 }
];

// filter → only passed students
let passed = students.filter((student, index, arr) => {
    console.log(`Checking student ${student.name} at index ${index}`);
    return student.marks >= 50;
});

// map → extract just names
let names = students.map((student, index, arr) => {
    console.log(`Mapping student ${student.name} at index ${index}`);
    return student.name;
});

// reduce → sum of all marks
let total = students.reduce((acc, student, index, arr) => {
    console.log(`Acc so far: ${acc}, Adding ${student.marks} from ${student.name}`);
    return acc + student.marks;
}, 0);

console.log("Passed:", passed);
console.log("Names:", names);
console.log("Total Marks:", total);
