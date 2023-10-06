import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
const AddTodoForm = () => {
	//fonction pour l'ajout des taches
    const[value,setValue]=useState()
    const dispatch=useDispatch();
    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo({
            title:value,
        }))
    }
	return (
		<form onSubmit={onSubmit} className=''>
            <div className='flex justify-center '>
            <label className=''></label>
			<input
				type='text'
				className='w-[30%] text-sm p-2 font-medium text-gray-900 bg-white border border-gray-200 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white'
				placeholder='Add todo...'
                value={value}
                onChange={(e)=>setValue(e.target.value)}
			></input>
			<button type='submit' className='rounded bg-sky-400 p-2 ml-1'>
				Submit
			</button>
            </div>
			
		</form>
	);
};
export default AddTodoForm;
