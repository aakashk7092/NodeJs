const fs = require("fs");
fs.writeFileSync("./contact.txt","Aakash +39299373");
console.log("1");
fs.readFile("./contact.txt","utf-8",(err,result)=>{
    console.log(result);
}
);

console.log("2");