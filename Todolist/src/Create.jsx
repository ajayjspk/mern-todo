import { useState } from "react";
import axios from 'axios'

 function Create() {

    const [task, setTask]=useState()
    const handleAdd=()=>{
        axios.post("mern-todo-api-one.vercel.app/add",{task:task})
        .then(result=> console.log(result))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <h1>{task}</h1>
      <input type='text' placeholder="Create a new task" onChange={(e)=>setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add Task</button>
    </div>
  )
}
export  default Create;
