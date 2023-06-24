import "../Css/TodoCreate.css"
import React from 'react';

function TodoCreate({setOpenModal}) {
    return(
   
    <button class="icon-btn add-btn"
        onClick={
            ()=>{setOpenModal(showModal=>!showModal);
                }
                }
    >
        <div class="add-icon"></div>
        <div class="btn-txt">Crear tarea</div>
    </button>
    );
    
}
export {TodoCreate};