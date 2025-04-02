import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // use the fetch API to make an AJAX request to the backend
  fetch('http://localhost:8080/api/todos')
  .then(res => res.json())
  .then(data => console.log(data));

  return (
    <>
  <div className="App">
     <h2>Our todos will go here</h2>
  </div>
  </>
  );
}

export default App;
