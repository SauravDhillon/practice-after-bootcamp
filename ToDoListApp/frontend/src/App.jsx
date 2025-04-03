import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './TodoItem';

function App() {
// create a place to hold our todos
const [todos, setTodos] = useState([]);

useEffect(() => {
   // use the fetch API to make an AJAX request to the backend
  fetch('/api/todos') // use a relative path for our GET request
  .then(res => res.json())
  .then(data => setTodos(data));
}, []);
  
const onDeleteClick = (id) => {
  // filter the todos array to remove the todo with the provided `id`
  const filteredTodos = todos.filter(todo => todo.id !== id);

  // set state with the new array
  setTodos(filteredTodos);
}

const todoItemComponentsArr = todos.map((todo) => {
  return <TodoItem 
           key={todo.id} 
           task={todo.task} 
           id={todo.id}
           onDeleteClick={onDeleteClick} 
           />;
});


  return (
    <>
  <div className="App">
     <h2>Our todos will go here</h2>
     {todoItemComponentsArr}
  </div>
  </>
  );
}

export default App;
