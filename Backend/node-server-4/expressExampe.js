const express = require('express');
const app = express(); // returns an object of type express

app.get('*',(req,res)=>{
    res.send("Hello World");
})
app.listen(5015,()=>{
    console.log(`server is running on port 5010`)
})