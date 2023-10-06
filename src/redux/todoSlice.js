import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todos",
    //valeur initial du todos
    initialState:[
        {id:1,title:"todo1",completed:false},
        {id:2,title:"todo2",completed:false},
        {id:3,title:"todo3",completed:true},
    ],
    reducers:{
        //ajouter un todo
        addTodo:(state,action)=>{
            const newTodo={
                id:Date.now(),
                title:action.payload.title,
                completed:false,
            };
            state.push(newTodo)
        },
        //voir si un todo est fait ou non
        toggleComplete:(state,action)=>{
            const index=state.findIndex((todo)=>todo.id===action.payload.id)
            state[index].completed=action.payload.completed
        },
        //suppression d'un todo
        deleteTodo:(state,action)=>{
        return     state.filter((todo)=>todo.id !==action.payload.id)
        },
        //pour la modification d'un todo
        editTask: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            const updatedState = [...state];
            updatedState[index].title = action.payload.title;
          },
    }
})
export const{addTodo,toggleComplete,deleteTodo,editTask}=todoSlice.actions;
export default todoSlice.reducer;
