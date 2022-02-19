import styled from './Todo.module.css'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteData,toggleData,updateData} from '../../Store/action';

export const Todolist=({data})=>{
    const [flag,setFlag]=useState(false);
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const sendData=()=>{
        const payload={
            id:data._id,
            task:text
        }
        dispatch(updateData(payload))

    }
    return <div className={styled.container} >
        <div className={styled.task}>{data.task}</div>
        <button className={styled.btn} onClick={()=>dispatch(toggleData(data._id))}>{data.status ? "Done" : "Not Done"}</button>
        <button className={styled.btn} onClick={()=>dispatch(deleteData(data._id))}>Delete</button>
        <button className={styled.btn}  onClick={()=>setFlag((prev)=>!prev)}>{flag? "Close" :"Update"}</button>
        <div>
            {
                flag?
                <div>
                    <input className={styled.intag} type="text" placeholder="Enter your task" onChange={(e)=>setText(e.target.value)} />
                    <button className={styled.add} onClick={sendData}>Done</button>
                </div>:
                ""
            }
        </div>
    </div>
}