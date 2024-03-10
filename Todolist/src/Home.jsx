import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { FaTrashCan } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";

export default function Home() {

    const [todos,setTodos]=useState([]);
    axios.defaults.withCredentials=true;

//writeing data into page
    useEffect(()=>{
      axios.get('mern-todo-api-one.vercel.app/get')
      .then(result=>setTodos(result.data))
      .catch(err=>console.log(err))
    })


const handleEdit=(id,a)=>{
axios.put('mern-todo-api-one.vercel.app/update/'+id)
.then((result)=>console.log(result))
.catch(err=>console.log(err))
if(!a)
a=false;
else a=true;
}

const deleteHandler = (id) => {
  axios.delete('mern-todo-api-one.vercel.app/delete/'+id)
.then((result)=>console.log(result))
.catch(err=>console.log(err))
}


  return (
    <div>
      <h2>Todo List</h2>
      <Create/>
      {
        todos.length===0 ? <div><h2>No Todo Yet! Add one now.</h2></div>:
        // eslint-disable-next-line react/jsx-key
        todos.map(todo=>(<div className='container'>
          <div className="check" >{todo.done?<FaCircleCheck className='icon' onClick={()=>handleEdit(todo._id,todo.done)}/>:<CiCircleCheck  className='icon' onClick={()=>handleEdit(todo._id,!todo.done)}/>}
          <h3 className={ todo.done ? 'line-through' : 'none' }>{todo.task}</h3></div>
        <FaTrashCan onClick={()=>deleteHandler(todo._id)} className='icon'/>
          </div>))
      }
    </div>
  )
}
