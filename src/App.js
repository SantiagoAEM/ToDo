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
  {text:'Dormir', completed:true},
  {text:'Despetar', completed:true}
 
];

function App() {
  const[stateTarea, setTarea] = React.useState(baseTareas);

  const tareasCompletadas = stateTarea.filter(todo => todo.completed).length;
  const totalTareas = stateTarea.length;

  const [state,setState] = React.useState('');
  console.log('buscando...' + state);
  
          return (
              <React.Fragment>

                <TodoCounter completadas={tareasCompletadas} total={totalTareas}/>
                      <TodoSearch 
                        state={state}
                        setState={setState}
                      />
                      <TodoCreate />
                  

                    <TodoList>
                        {baseTareas.map(todo =>(
                          <TodoItem 
                            key={todo.text}
                            text={todo.text}
                            completadas={todo.completed}
                          />)

                        )}
                      </TodoList>
            
            
              </React.Fragment>
            );

  
}



export default App;
