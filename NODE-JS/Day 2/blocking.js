const fs = require("fs");
fs.writeFileSync("./contact.txt","Aakash +39299373");
console.log("1");
const result = fs.readFileSync("./contact.txt","utf-8");
console.log(result);
console.log("2");