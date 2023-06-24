import React, { Children } from "react";
import { useLocalStorage } from '../Custom-hooks/localStorage';


const TodoContext = React.createContext();

function TodoProvider({ children }) {
     
    const{item:stateTarea, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
    const tareasCompletadas = stateTarea.filter(todo => todo.completed).length;
    const totalTareas = stateTarea.length;
    const [state,setState] = React.useState('');
    const [openModal,setOpenModal] = React.useState(false);
    const tareaBuscada = stateTarea.filter( //funcion de busqueda
        (todo) => { 
                    return todo.text.toLowerCase().includes(state.toLocaleLowerCase());} //tolower convierte a minisculas el string
        );
  
    const addTodo =(text)=>{
      const newTodos = [...stateTarea];
      newTodos.push({
        text,
        completed:false,
      });
      saveTodos(newTodos);
    }      
    const completeTodo = (text) => {
      const newTodos = [...stateTarea];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed = true;
   saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...stateTarea];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex,1);
      saveTodos(newTodos);
      
    };
    
    return( 
        <TodoContext.Provider value ={{
            loading,
            error,
            tareasCompletadas,
            totalTareas,
            state,
            setState,
            tareaBuscada,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
      {children}
    </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};