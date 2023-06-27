import React from "react";
import "../Css/TodoForm.css"
import {TodoContext} from './TodoContext'

function TodoForm(){
    const {
        addTodo,
        setOpenModal} = React.useContext(TodoContext);

        const [newTodoValue, setNewTodoValue] =React.useState('');
    const onSubmit= (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel= () =>{
        setOpenModal(false);
    };

    const onChange= (event) =>{
        setNewTodoValue(event.target.value);
    };
    
  

return(
    <form onSubmit={onSubmit} className="formAdd">
       
        <textarea placeholder="Escribe tu nueva tarea" className="txtarea"
         rows="8" cols="40" required
        value={newTodoValue}
        onChange={onChange}
        />

        <div className="formContainer">
        <button  className="form-button form-button--cancelar" type="button"  onClick={onCancel}>
        Cancelar
        </button>

        <button className="form-button form-button--guardar" type="submit">
            Guardar
            </button>
            </div>   
    </form>
);
 
}

export {TodoForm};