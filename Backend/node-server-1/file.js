const fs = require('fs');
fs.writeFile('hello.txt', 'Hello from the server',(err)=>{
    if(err){
        console.log(err);
    } else{
        console.log("File written successfully");
    }
});  /// writing to a file


/// reading from a file

fs.readFile('hello.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
});  /// reading from a file