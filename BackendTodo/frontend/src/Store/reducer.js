import {ADD_TODO,TOGGEL_TODO,DELETE_TODO,UPDATE_TODO} from './actiontype';

let init={
    todo:[],
}

export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case ADD_TODO:{
            return {
                ...state,todo:payload
            }
        }

        // case TOGGEL_TODO : {
        //     return {
        //         ...state,todo:state.todo.map((e)=>e.id===payload?{...e,status:!e.status}:e)
        //     }
        // }

        // case DELETE_TODO : {
        //     return {
        //         ...state,todo:state.todo.filter((e)=>e.id!==payload)
        //     }
        // }
        // case UPDATE_TODO : {
        //     return {
        //         ...state,todo:state.todo.map((e)=>e.id===payload.id?{...e,task:payload.task}:e)
        //     }
        // }
        default:
            return state;
    }
}
