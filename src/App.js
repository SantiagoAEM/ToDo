import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreate } from './TodoCreate';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <TodoCounter completadas={4} total={10}/>
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



export default App;
