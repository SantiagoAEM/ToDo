import React from 'react';
import '../Css/TodoCounter.css';
import { TodoContext } from './TodoContext';

function TodoCounter() {
   const{
            tareasCompletadas,
            totalTareas,
   } = React.useContext(TodoContext)

    return(
            <h1>
                Has completado {tareasCompletadas} de {totalTareas} Tareas
            </h1>

    );
    
}
export {TodoCounter};