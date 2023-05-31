import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodoCreate } from './Components/TodoCreate';
import React from 'react';
import { useLocalStorage } from './Custom-hooks/localStorage';

/* 
const baseTareas = [
  {text:'Bañarse', completed:true},
  {text:'Desayunar', completed:false},
  {text:'Estudiar React', completed:false},
  {text:'Comer', completed:false},
  {text:'Dormir', completed:false},
  {text:'Despetar', completed:true}
 
]; */

function App() {
  const[stateTarea, saveTodos] = useLocalStorage('TODOS_V1',[]);
  const tareasCompletadas = stateTarea.filter(todo => todo.completed).length;
  const totalTareas = stateTarea.length;
  const [state,setState] = React.useState('');
  const tareaBuscada = stateTarea.filter( //funcion de busqueda
      (todo) => { 
                  return todo.text.toLowerCase().includes(state.toLocaleLowerCase());} //tolower convierte a minisculas el string
      );


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



export default App;
