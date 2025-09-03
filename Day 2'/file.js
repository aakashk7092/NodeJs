const fs = require("fs");

// Write file
fs.writeFileSync("test.txt", "Hello Node.js!");

// Read file
console.log("Initial Content:", fs.readFileSync("test.txt", "utf-8"));

// Append
fs.appendFileSync("contact.txt", " yogi - +977599557");

// Read again
console.log("Updated Content:", fs.readFileSync("contact.txt", "utf-8"));
