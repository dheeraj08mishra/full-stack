import express from 'express';
import userRoutes from './routes/userRoutes.js';
const app = express();

 app.use('/api/user',userRoutes); 
 app.use(express.json());


app.all('*',(req,res)=>{
    res.status(200).send("Default Route");
});
app.listen(5020,(req,res)=>{
    console.log(`Server is running on port 5020`);
})