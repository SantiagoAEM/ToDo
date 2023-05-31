import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodoCreate } from './Components/TodoCreate';
import React from 'react';


function AppUI({
    tareasCompletadas,
    totalTareas,
    state,
    setState,
    tareaBuscada,
    completeTodo,
    deleteTodo,
  
}) {
    
      
    return (
        <React.Fragment>

          <TodoCounter completed={tareasCompletadas} total={totalTareas}/>
                <TodoSearch 
                  state={state}
                  setState={setState}
                />
                <TodoCreate />
                
                <TodoList>
                  {tareaBuscada.map(todo =>(
                    <TodoItem 
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)} //encapsulamos una funcion en otra de lo contrario react marcara error
                      onDelete={() => deleteTodo(todo.text)}

                    />)

                  )}
                </TodoList>
      
      
        </React.Fragment>
      );

  } 
  export {AppUI};      
         
