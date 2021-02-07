import React, {useEffect, useState} from 'react'
import {DebounceInput} from 'react-debounce-input';
import './App.css';



const App = () => {

const backgrounds = [
 {bg: "earth", screamColor: 'rgb(248, 198, 119)', messColor: "rgb(50, 168, 82)"},
 {bg: "cliff", screamColor: 'darkgreen', messColor: "rgb(51, 64, 59)"}, 
//  {bg: "well", screamColor: "rgb(145, 51, 54)", messColor: "rgb(138, 88, 66)"},
 {bg: "canyon", screamColor: 'pink', messColor: "rgb(7, 35, 57)"}, 
]

const messages = [
  `dude yeah, I feel that`, 
  `let it out! that's valid`, 
  `that was a good scream. 10/10`, 
  `you're right about that one`,
  `rough day at the office?`,
  `that's right, let it out`,
  `bruh`,
  `uhhh definitely`,
  `same`, 
  `tell me about it`,
  `understandable`, 
  `good thing you didn't hold back`,
  'that was satisfying, no?'
]



const [background, setBackground] = useState(`earth`) 
const [scream, setScream] = useState('')
const [message, setMessage] = useState('')

const matchingBg = backgrounds.filter((bg) => bg.bg === background)[0]

const randomMessage = messages[Math.floor(Math.random() * messages.length)]


const handleScream = e => {
  // set scream
  const {value} = e.target
  setScream(value)
  // set validation message
  const timeout = setTimeout(() => {
    setMessage(randomMessage)
  }, 1000);
  return () => {
        clearTimeout(timeout);
      }
}


// make the message and scream disappear
useEffect(() => {
  const timeout = setTimeout(() => setMessage(''), 2000);
  const hm = setTimeout(() => setScream(''), 2000)
  return () => {
    clearTimeout(timeout, hm);
  }
}, [message]);




  return (
    <div className={`${background} container`}>
  
        <DebounceInput 
        element="textarea"
        style={{color: matchingBg.screamColor}} 
        spellCheck="false" 
        type="text" 
        value={scream} 
        onChange={handleScream} 
        debounceTimeout={2000}
        placeholder="insert yell here"/>

        <h1 style={{color: matchingBg.messColor}}>{message}</h1>

      
        <div className="button-container">
        {backgrounds.map((bg) => (
        <button key={bg.bg}  onMouseOver={() => setBackground(`${bg.bg}`)}>{bg.bg}!</button> 
        ))} 

        </div>
        <a href="https://www.linkedin.com/in/amelia-scarbrough/">made with love by Amelia</a>

      
    </div>
   
  );
}

export default App;

