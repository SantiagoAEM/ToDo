import { AppUI } from './AppUI';
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
  const{item:stateTarea, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
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
  console.log("hohhohoh");
         return(
                  <AppUI
                    loading={loading}
                    error={error}
                    tareasCompletadas={tareasCompletadas}
                    totalTareas={totalTareas}
                    state={state}
                    setState={setState}
                    tareaBuscada={tareaBuscada}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    />
                );

}



export default App;
