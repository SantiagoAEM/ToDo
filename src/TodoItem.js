import "./Css/TodoItem.css"

function TodoItem(props) {
    return(
      <li className="todo-item">
        <span className="check"> {props.completadas}</span>
        <p>{props.text}</p>
        <span className="close-item"></span>
      </li>
    );
    
  }
  export {TodoItem};