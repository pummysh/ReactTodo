import {ADD_TODO,TOGGEL_TODO,DELETE_TODO,UPDATE_TODO} from './actiontype';
import axios from 'axios';

export const addtodo=(payload)=>({
    type:ADD_TODO,
    payload:payload
})

export const toggel=(id)=>({
    type:TOGGEL_TODO,
    payload:id
})

export const deletetodo=(id)=>({
    type:DELETE_TODO,
    payload:id
})

export const update=(payload)=>({
    type:UPDATE_TODO,
    payload:payload
})


export const getData=()=>(dispatch)=>{
    const request={
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
        url:'http://localhost:2345/todo',
    }
    axios(request)
    .then((res)=>
    dispatch(addtodo(res.data))
    // console.log('res',res)
    )
    .catch((err)=>
    console.log(err)
    )
}

export const postData=(payload)=>(dispatch)=>{
    const request={
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data:payload,
        url:'http://localhost:2345/todo'
    }
    axios(request)
    .then((res)=>
    // console.log("res",res)
    dispatch(getData())
    ).catch((err)=>
    console.log(err)
    )
}

export const deleteData=(id)=>(dispatch)=>{
    console.log(id);
    const request={
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        url:`http://localhost:2345/todo/${id}`
    }
    axios(request)
    .then((res)=>
    dispatch(getData())
    ).catch((err)=>
    console.log(err)
    )
}

export const toggleData=(id)=>(dispatch)=>{
    const request={
        method: 'patch',
        headers: {
            'Content-Type': 'application/json'
        },
        url:`http://localhost:2345/todo/toggle/${id}`
    }
    axios(request)
    .then((res)=>
    dispatch(getData())
    ).catch((err)=>
    console.log(err)
    )
}

export const updateData=(payload)=>(dispatch)=>{
    const request={
        method: 'patch',
        headers: {
            'Content-Type': 'application/json'
        },
        url:`http://localhost:2345/todo/update/${payload.id}`,
        data: {task: payload.task}
    }
    axios(request)
    .then((res)=>
    dispatch(getData())
    ).catch((err)=>
    console.log(err)
    )
}

