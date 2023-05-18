import './TodoCounter.css';

function TodoCounter({completadas, total}) {
    return(
            <h1>
                Has completado {completadas} de {total} Tareas
            </h1>

    );
    
}
export {TodoCounter};