let users = [
    {id: 1, name: "Aman", percentage: 90, skill: "IT"},
    {id: 2, name: "Mitesh", percentage: 90, skill: "CS"},
    {id: 3, name: "Sahil", percentage: 46, skill: "EnTc"},
    {id: 4, name: "Omkar", percentage: 35, skill: "CS"},
    {id: 5, name: "Vijay", percentage: 30, skill: "IT"},
];

// passed students
let passedSudents = users
.filter((user)=>{
    return user.percentage > 40;
})
.map((user)=>{
    return user.name
})
console.log("Passed Users: ");
console.log(passedSudents);
// Passed Users: 
// [ 'Aman', 'Mitesh', 'Sahil' ]


// failed students
let failedSudents = users
.filter((user)=>{
    return user.percentage < 40;
})
.map((user)=>{
    return user.name
})
console.log("Failed Users: ");
console.log(failedSudents);
// Failed Users:
// [ 'Omkar', 'Vijay' ]