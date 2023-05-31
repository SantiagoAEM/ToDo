import "../Css/TodoItem.css"

function TodoItem(props) {
    return(
      <li className="TodoItem">
        <span 
        className={`Item-check ${props.completed && "Item-check--active"} `}
        onClick={props.onComplete}
        
        > 
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Item-close"
        onClick={props.onDelete}
        ></span>
      </li>
    );
    
  }
  export {TodoItem};