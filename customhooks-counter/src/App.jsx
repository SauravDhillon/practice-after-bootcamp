import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/useCounter'

function App() {
    const {count, increment, decrement, reset, set} = useCounter(0);

  return (
    <>
      <div>
        <h2>Custom Hooks Practice Count Application</h2>
        <p>Count: {count}</p><br />
        <p>Play with any of below buttons😊</p>
        <button onClick={increment}>Increment Counter</button><br />
        <button onClick={decrement}>Decrement Counter</button><br />
        <button onClick={reset}>Reset Count</button><br />
        <button onClick={() => set(100)}>Set Count to 100</button>
      </div>
    </>
  )
}

export default App
