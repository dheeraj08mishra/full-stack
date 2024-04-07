console.log("hey there!");

/// creating a http server

// import http from 'http';
// import fs from 'fs';
// import path from 'path';
const http = require("http"); /// importing http module
const fs = require("fs"); /// importing file system module
// const { json } = require("stream/consumers");

/// creating a server on specific port
http
  .createServer((req, res) => {
    console.log("first server created");
    res.setHeader("codedBy", "Dheeraj");
    // res.setHeader("Content-type", "text/html");
    // for json data
    res.setHeader("Content-type", "application/json");
    res.setHeader("status", "200");
    console.log(req.headers);
    const data = JSON.stringify({"name": "Dheeraj", age: 25, "nessage": "Hello from the server"})
    res.write(data);

    switch (req.url) {
        case "/":
            res.end();
            break;
        case "/about":
            res.end("About us page");
            break;
        case "/contact":
            res.end("Contact us page");
            break;
        default:
            res.writeHead(404, { "Content-type": "text/html" });
            res.end("<h1>Page not found</h1>");
            break;
    }
    fs.appendFile(
      "logs.txt",
      ` Request came at ${new Date()}  ${req.method} \n`,
      () => {
        res.end("Hello from the server");
      }
    );
  })
  .listen(4000);
