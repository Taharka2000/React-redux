import React from "react";
import TodoItem from "./Task";
import { useSelector } from "react-redux";
const TodoList=()=>{
    const todos=useSelector((state)=>state.todos)
        return(
          <div className="">
            <ul className="w-[auto] mt-5 ml-[40px] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {todos.map((todo)=>( 
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
              ))}
            </ul>
            </div>
        )
}

export default TodoList;