const { randomBytes } = require("crypto");

console.log(Math.random())



const names = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emily",
        "Frank",
        "Grace",
        "Henry",
        "Isabella",
        "Jack",
        "Katherine",
        "Liam",
        "Mia",
        "Nathan",
        "Olivia",
        "Penelope",
        "Quentin",
        "Rose",
        "Sarah",
        "Thomas"
      ];



randomName = names[Math.floor(Math.random() * names.length)];
console.log(Math.floor(Math.random() * names.length))
console.log(randomName)