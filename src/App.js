import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoCreate } from './TodoCreate';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

    <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </TodoList>
   
    <TodoCreate />
  
    </div>
  );
}


function TodoItem() {
  return(
    <li>
      <span>V</span>
      <p>Estudiar react</p>
      <span>X</span>
    </li>
  );
  
}
export default App;
