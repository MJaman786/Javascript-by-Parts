// ✅ 1. Rest (parameter) operator
// It bundel ups the rest all argumnets and return them

// type 1:
function numbers(...num) {
    return num
}
console.log(numbers(100, 200, 400, 600)); // [ 100, 200, 400, 600 ]
// type 2:
function addNumbers(num1, num2, ...num3) {
    return num1 + num2 + num3
}
console.log(addNumbers(100, 200, 300, 400, 600));

