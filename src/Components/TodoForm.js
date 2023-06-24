import React from "react";
import "../Css/TodoForm.css"

function TodoForm(){
return(
    <form>
       
        <textarea placeholder="Escribe tu nueva tarea" className="txtarea" rows="8" cols="40"/>

        <div className="formContainer">
        <button className="form-button form-button--cancelar">
        Cancelar
        </button>

        <button className="form-button form-button--guardar">
            Guardar
            </button>
            </div>   
    </form>
);

}

export {TodoForm};