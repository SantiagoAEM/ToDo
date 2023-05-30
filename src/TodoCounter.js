import './Css/TodoCounter.css';

function TodoCounter({completed, total}) {
    return(
            <h1>
                Has completado {completed} de {total} Tareas
            </h1>

    );
    
}
export {TodoCounter};