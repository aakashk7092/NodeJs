const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.icon") return res.end();
  const log = `${Date.now()} : ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }
    switch(myUrl.pathname){
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`hi, ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("hello this is your search result "+search);
        break;
      default:
        res.statusCode = 404;
        res.end("404 NOT FOUND");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("Server started on port 8000"));
