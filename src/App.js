import React, {useEffect, useState} from 'react'
import {DebounceInput} from 'react-debounce-input';
import './home.css';



const App = () => {

const backgrounds = [
 {bg: "earth", color: 'rgb(248, 198, 119)'},
 {bg: "cliff", color: 'darkgreen'}, 
 {bg: "well", color: "red"},
 {bg: "canyon", color: 'pink'}, 
]

const messages = [
  "Dude yeah, I feel that", 
  "Let it out! That's valid", 
  "That was a good scream, 10/10", 
  "You're right about that one",
  "Rough day at the office?",
  "That's right. Let it out"
]



const [background, setBackground] = useState(`earth`) // good
const [scream, setScream] = useState('')
const [message, setMessage] = useState('')

const matchingBg = backgrounds.filter((bg) => bg.bg === background)[0]

const randomMessage = messages[Math.floor(Math.random() * messages.length)]
const showMessage = scream.toLowerCase().includes("aaa")? `${scream.split(' ')[0]} is right` : randomMessage

const handleScream = e => {
  // set scream
  const {value} = e.target
  setScream(value)
  // set validation message
  const timeout = setTimeout(() => {
    setMessage(showMessage)
  }, 1000);
  return () => {
        clearTimeout(timeout);
      }
}


// make the message disappear
useEffect(() => {
  const timeout = setTimeout(() => setMessage(''), 1000);
  const hm = setTimeout(() => setScream(''), 1000)
  return () => {
    clearTimeout(timeout, hm);
    // clearTimeout(hm)
  }
}, [message]);




  return (
    <div className={`${background} container`}>
  
        <DebounceInput 
        element="textarea"
        style={{color: matchingBg.color}} 
        spellCheck="false" 
        type="text" 
        value={scream} 
        onChange={handleScream} 
        debounceTimeout={1000}
        placeholder="insert scream here"/>
        <h1>{message}</h1>
        <div className="button-container">
        {backgrounds.map((bg) => (
        <button key={bg.bg}  onMouseOver={() => setBackground(`${bg.bg}`)}>{bg.bg}!</button> 
        ))} 
        </div>
      
    </div>
   
  );
}

export default App;

