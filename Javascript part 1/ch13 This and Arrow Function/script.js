let Users = {
    username: "Aman Mujawar",
    passward: "aman@1234",
    userDetails: function () {
        console.log(this);
        console.log(`Your Username is: ${this.username}`);
        console.log(`Your Password is: ${this.passward}`);
    }
}

Users.userDetails();
// Your Username is: Aman Mujawar
// Your Password is: aman@1234

// this. only work in objects to get the scope context 

const add = (num1, num2) => num1 + num2
console.log(add(10, 20)); // 30

const printFunc = () => Users.username
console.log(printFunc());

