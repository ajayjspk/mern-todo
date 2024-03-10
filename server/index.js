const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const TodoModel=require("./models/Schema")



const app=express()
app.use(cors(
    { origin:{"mern-todo-frontend-psi.vercel.app"},
     methods:["POST","GET"],
     Credentials:true
    }
))
app.use(express.json())

// Database connection
mongoose.connect("mongodb+srv://techlogicak2:xWOuWrF1h1VnRYiz@cluster0.73nnsgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=> {
    const {id}=req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done:true}) 
    .then(result=>res.json(result)).
    catch(err=>res.json(err))
})

app.delete('/delete/:id', (req, res) =>{
    const {id}=req.params;
    TodoModel.findOneAndDelete({_id : id})
    .then(result=>res.json(result)).
    catch(err=>res.json(err))
})

app.post('/add',(req ,res)=>{
    const task=req.body.task;
    const name="ajay";
    TodoModel.create({
        name:name,
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(3001, ()=>{

    console.log("Server is running on port 3001");
})
