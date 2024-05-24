const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write("Hello World");
        res.end();
    
    } 
    if(req.url ==='/api/courses'){
        const courses = [
            {id:1,name:'course1'},
            {id:2,name:'course2'},
            {id:3,name:'course3'}
        ];
        try{
            res.setHeader('Content-Type','application/json');

            res.write(JSON.stringify(courses));
            res.end();
        }catch(err){
            res.statusCode=500;
            res.end("Something went wrong ");
        }
        
    }
});
server.listen(5010,()=>{
    console.log(`server is running on port 5010`)
});