import "./Css/TodoItem.css"

function TodoItem(props) {
    return(
      <li className="TodoItem">
        <span className={`Item-check ${props.completadas && "Item-check--active"} `}> {props.completadas}</span>
        <p className={`TodoItem-p ${props.completadas && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Item-close"></span>
      </li>
    );
    
  }
  export {TodoItem};