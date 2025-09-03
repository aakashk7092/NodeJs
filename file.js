const fs = require("fs");

fs.writeFileSync("./test.txt","Hey there")
const result = fs.readFileSync("./contact.txt","utf-8");
console.log(result); // sycronous returns result