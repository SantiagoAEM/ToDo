import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from   './Components/TodoList';
import { TodoItem } from   './Components/TodoItem';
import { TodoCreate } from './Components/TodoCreate';
import {TodosLoading} from './Components/TodosLoading';
import { TodosError } from './Components/TodosError';
import { EmptyTodos } from './Components/EmptyTodos';
import React from 'react';



function AppUI({
    loading,
    error,
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
                  {loading && <TodosLoading/>}
                  {error && <TodosError/>}
                  {(!loading && tareaBuscada.length === 0) && <EmptyTodos />}
                  
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
         
