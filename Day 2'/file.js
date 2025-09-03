const fs = require("fs");

// Write to test.txt
fs.writeFileSync("./test.txt", "Hey there");

// Read from contact.txt
const result=fs.readFileSync("./contact.txt", "utf-8");
console.log(result);