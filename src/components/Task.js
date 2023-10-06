import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { toggleComplete,deleteTodo,editTask } from "../redux/todoSlice";
//pour savoir si la tache est accompli ou non
const TodoItem=({id,title,completed})=>{
    const dispatch=useDispatch();
    const handleCompleteClick=()=>{
        dispatch(toggleComplete({ id:id,completed:!completed }));
    }
    const [isEdit, setIsEdit] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(title); // State pour la valeur de l'input de mise à jour
    //rtyfytfytfy
    const Update = () => {
        // Utilisez updatedTitle pour la mise à jour
        dispatch(editTask({ id: id, title: updatedTitle }));
        setIsEdit(false); // Réinitialisez isEdit après la mise à jour
       // console.log('la valeur mise a jour     ',updatedTitle)
    };
    const handleDeleteClick=()=>{
        dispatch(deleteTodo({id:id}))
    }
    return(
        <div className=""> 
        <li className="w-[auto]  border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex justify-around ">
                <span className=" te">
                   <input type="checkbox" checked={completed} onChange={handleCompleteClick} className="m-2" >
                   </input>
                   {title}
                </span>
                <button onClick={handleDeleteClick}//pour supprimer une tache
                    className="bg-red-500 mt-2 p-2 rounded mb-3">Delete</button>
                    <button
                        onClick={() => {
                            setIsEdit(true);
                        }}
                        className="rounded bg-sky-400 p-2 pb-2 mt-2  mb-3"
                    >
                        Edit
                            //button pour afficher un champ apres un click sur edit pour modifier une tache
                    </button>
                    {isEdit && (
                        <>
                            <input
                                type="text"
                                placeholder="update"
                                value={updatedTitle} // Utilisez la valeur mise à jour ici
                                onChange={(e) => setUpdatedTitle(e.target.value)} // Mettez à jour updatedTitle lorsque l'utilisateur tape
                                className=" text-sm p-2 font-medium text-gray-900 bg-white border border-gray-200 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            <button onClick={Update} className="rounded bg-sky-400 p-2 pb-2 mt-2  mb-3">Update</button>
                        </>
                    )}
                </div>
        </li>
        </div>
    )
}
export default TodoItem;
