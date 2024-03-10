const mongoose=require('mongoose')
const Todoschema=new mongoose.Schema({
    name:{type:String,required:true},
    task:{type:String,required:true},
    done:{type:Boolean,default:false}
})

const TodoModel =mongoose.model("todos",Todoschema)
module.exports=TodoModel