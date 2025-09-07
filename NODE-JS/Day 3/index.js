const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = '${Date.now()} : ${req.url} New Req  Recieved\n' ;

  fs.appendFile("log.txt",log,(err,data)=>{
    switch(req.url){
        case "/":
            res.end("HomePage");
            break;
        case "/about":
            res.end("I Am Aakash");
            break;
        default:
            res.end("402 NOT FOUND");  
            break;      
    }
   })
});

myServer.listen(8000, () => console.log("Server started on port 8000"));
