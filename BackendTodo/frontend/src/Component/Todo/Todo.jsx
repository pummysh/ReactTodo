import styled from './Todo.module.css';
import {Todolist} from './Todolist';
import {useEffect, useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {postData,getData} from '../../Store/action';
import {v4 as uuid} from 'uuid'

export const Todo=()=>{
    const dispatch = useDispatch();
   let todo=useSelector((state)=>state.todos.todo); 

    useEffect(()=>{
        todo=dispatch(getData())
    },[])

    const [task,setTask]=useState("");

    const add=()=>{
      const payload={
          task:task,
      }
      dispatch(postData(payload));
    }


    console.log("todo",todo)
    return <div className={styled.todoBody}>
        <h1 className={styled.heading}>Todo App</h1>
        <input className={styled.intag} type="text" placeholder="Enter your task..." onChange={(e)=>setTask(e.target.value)} />
        <button className={styled.add} onClick={add}>Add</button>
        <div>
            {
                todo.map((e)=>
               <div key={e._id}>
                    <Todolist  data={e}/>
               </div>
                )
            }
        </div>
    </div>
}