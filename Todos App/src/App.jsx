import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDos from './ToDos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <ToDos />
    </div>    
    </>
  )
}

export default App
