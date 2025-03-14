import React, { useState } from 'react';
import './App.css'
import AngryButton from "./components/AngryButton"
import CounterButton from './components/CounterButton'
import LightSwitchButton from './components/LightSwitchButton'
import TextRepeaterButton from './components/TextRepeaterButton'

function App() {

  const [light, setLight] = useState('off');
  const [angryApp, setAngryApp] = useState(0);
  const dark = (light === "off") ? 'dark' : '';
  const switchLight = () => {
    setLight(light === "on" ? "off" : "on")
  }
  const increaseAnger = (amount) => {
    if(angryApp < 1){
      setAngryApp(angryApp + amount);
    }else {
      setAngryApp(0);
    }
  }
  
  // Setting a form element 
  const [word, setWord] = useState("");

  return (
    <div className= {`App ${dark}`}>
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAnger={increaseAnger}/>
        <CounterButton increaseAnger={increaseAnger}/>
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={increaseAnger}/>
        <TextRepeaterButton increaseAnger={increaseAnger}/>
      </section>
      <main>
        <input
          value={word}
          onChange={(event) => setWord(event.target.value)}
          placeholder="Please enter a word"
          />
          <h1>Your word is :{word}.</h1>
      </main>
    </div>
  )
}

export default App
