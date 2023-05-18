function TodoItem(props) {
    return(
      <li>
        <span>V {props.completadas}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
    
  }
  export {TodoItem};