import React, { useState } from 'react';

const ToDos = () => {
  const maxChars = 64;
  const [charCount, setCharCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  // Function to handle user input and error handling
  const handleInput = (event) => {
    const text = event.target.value; // Get text from input
    const textChars = text.length;  // Count characters

    if (textChars > maxChars) {
      setError('Too many characters.');
    } else {
      setError('');
    }
    setCharCount(textChars);
  };

  // Helper function to handle submit functionality on form 
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    
    const newTodoTextInput = event.target.querySelector('[type="text"]'); // This represents the object input element in DOM node with type="text"
    if (newTodoTextInput) {
      const newTodoText = newTodoTextInput.value.trim(); // This represents the actual text inside the input field
      if (newTodoText.length > maxChars) {
        alert('Too many characters.');
      } else if (newTodoText.length > 0) {
        setTodos(prev => [...prev, newTodoText]); // Append new todo
        newTodoTextInput.value = ''; // Clear input field
        setCharCount(0); // Reset character count
      }
    }
  };

  // Handle completion of a todo (removes it from the list)
  const handleComplete = (event) => {
    const todoIndex = Number(event.target.dataset.index); // to grab index of todo item
    setTodos(prev => prev.filter((_, index) => index !== todoIndex));
  };

  return (
    <section>
      <h2>To-Do List Component</h2>
      <form onSubmit={handleSubmit}>
        <h3>New To-Do</h3>
        <label>
          Enter task:
          <input type="text" onChange={handleInput} />
        </label>
        <p>
          <small>
            {charCount}/{maxChars} used; {maxChars - charCount} remaining.
          </small>
        </p>
        {error.length > 0 && <p style={{ color: 'red' }}>{error}</p>}
        <input type="submit" value="Add Task" />
      </form>

      <h3>To-Do List</h3>
      <ul>
        {todos.length > 0 && todos.map((todo, i) => (
          <li key={i}>
            <button type="button"
                    data-index={i}
                    onClick={handleComplete}>
              Click to Complete
            </button>
            {todo}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToDos;
