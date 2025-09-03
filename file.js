const fs = require("fs");

// Write to test.txt
fs.writeFileSync("./test.txt", "Hey there");

// Read from contact.txt
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(result);
  }
});
