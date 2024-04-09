// // const http = require('http');
// // http.createServer((req,res)=>{
// //     res.writeHead(200,{'Content-Type':'text/html'});
// //     // res.write('<h1>Hello from the server</h1>');
// //     // res.end();
// //     switch(req.method){
// //         case 'GET':
// //             return res.end("GET request");
// //         case 'POST':
// //             return res.end("POST request");
// //     }
// // }).listen(8000,()=>{console.log("server running at 8000")});  /// creating a server

// // using express
// const express = require("express");
// const app = express();

// // Middleware
// // Middleware is a function that has access to the request and response object. It can execute any code, make changes to the request and the response object, end the request response cycle, and call the next middleware in the stack.
// // Middleware functions can perform the following tasks:
// // Execute any code.
// // Make changes to the request and the response objects.
// // End the request-response cycle.
// // Call the next middleware function in the stack.
// // If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.


// // global middleware
// app.use((req, res, next) => {
//   console.log("Middleware called");
//   next();
// });
// let flag = 0;
// app.use((req, res, next) => {
//   if (flag++ % 2 === 0) {
//     return next();
//   } else {
//     return res.json({ message: "You are not authorized" });
//   }
// });
// // path parameters

// app.get("/users/:id",(req,res,next)=>{next()}, (req, res) => {
//   const id = req.params.id;
//   return res.json({ message: `Hello from express and id is ${id}` });
// });

// app.post("/users", (req, res) => {
//   return res.json({ message: "Hello from express users" });
// });

// app.get("/", (req, res) => {
//   return res.json({
//     users: [
//       { name: "John", age: 20 },
//       { name: "Doe", age: 30 },
//     ],
//   });
// });

// app.listen(8000, () => {
//   console.log("server running at 8000");
// }); /// creating a server


const path = require('path');

console.log("path->", path);

console.log("file name",__filename); // absolute path

console.log('septator->',path.sep); // separator
console.log('delimiter->',path.delimiter); // delimiter

console.log(process.env.PATH.split(path.delimiter)); // split the path

const os = require('os');

console.log(os.userInfo()); // user info

// if we want to find info of relative path
console.log("relative path->",__dirname); // relative path 
// and compare it with the absolute path
console.log("absolute path->",path.resolve(__dirname)); // absolute path