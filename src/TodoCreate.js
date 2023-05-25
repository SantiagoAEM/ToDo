import "./Css/TodoCreate.css"

function TodoCreate() {
    return(
        <div className="create">
        <form className="form2" action="https://www.google.com/search" method="GET" target="_blank">
        <input className="input-add" placeholder="Crear nueva tarea" />
        <span className="add-item"></span>
    
</form>
</div>
    );
    
}
export {TodoCreate};