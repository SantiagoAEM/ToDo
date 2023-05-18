import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreate } from './TodoCreate';
import React from 'react';


const baseTareas = [
  {text:'Bañarse', completed:true},
  {text:'Desayunar', completed:true},
  {text:'Estudiar React', completed:false},
  {text:'Comer', completed:false},
  {text:'Dormir', completed:false}
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completadas={4} total={10}/>
      <TodoSearch />

    <TodoList>
        {baseTareas.map(todo =>(
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completadas={todo.completed}
          />)

        )}
    </TodoList>
   
    <TodoCreate />
  
    </React.Fragment>
  );
}



export default App;
