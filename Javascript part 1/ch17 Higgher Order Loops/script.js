let myArray = ["Aman", "Mitesh", "Sahil", "Omkar"];
for (element of myArray) {
    console.log(element)
}
/* 
    Aman
    Mitesh
    Sahil 
    Omkar
*/
let Users = [
    ["Aman", 21, "React"],
    ["Omkar", 22, "Python"],
    ["Mitesh", 21, "Next js"]
];
for (let user of Users) {
    console.log(`Name: ${user[0]}, Age: ${user[1]}, Skill: ${user[2]}`);
}
/*
    Name: Aman, Age: 21, Skill: React
    Name: Omkar, Age: 22, Skill: Python
    Name: Mitesh, Age: 21, Skill: Next js
*/

let myObj = { name: "Aman", skill: "Fullstack", age: "22" };
for (key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}
/*
    name: Aman      
    skill: Fullstack
    age: 22
*/

let records = {
    record1: { name: "abc", age: 21, skill: "Python" },
    record2: { name: "xyz", age: 20, skill: "React" },
    record3: { name: "pqr", age: 19, skill: "Next js" },
}

for (key in records) {
    console.log(`${key}: ${records[key].name}, ${records[key].age}, ${records[key].skill}`);
}
/*
    record1: abc, 21, Python
    record2: xyz, 20, React
    record3: pqr, 19, Next js
*/


let games = {
    game1: "GTA",
    game2: "Valorant",
    game3: "NFS"
}
for ([key, value] of Object.entries(games)) {
    console.log(`${key} : ${value}`);

}

/*
game1 : GTA
game2 : Valorant
game3 : NFS
*/

let students = [
    { id: 1, name: "Aman", skills: ["Python", "Javascript", "React js", "MySql"] },
    { id: 2, name: "Mitesh", skills: ["Python", "Java", "Next js", "MySql"] },
    { id: 3, name: "Omkar", skills: ["Ruby", "Javascript", "React js", "MongoDb"] },
];
students.forEach((value, index, arr)=>{
    console.log(`${value.name} : ${value.id} : ${value.skills.join(", ")}`);
})
/*
Aman : 1 : Python, Javascript, React js, MySql
Mitesh : 2 : Python, Java, Next js, MySql
Omkar : 3 : Ruby, Javascript, React js, MongoDb
*/ 