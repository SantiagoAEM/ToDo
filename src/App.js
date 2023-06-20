import { AppUI } from './AppUI';
import React from 'react';
import { TodoProvider } from './Components/TodoContext';


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

           return(
            <TodoProvider>
                  <AppUI />
            </TodoProvider>
                );

}



export default App;
