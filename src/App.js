import React, {useEffect, useState} from 'react'
import './home.css';



const App = () => {

const backgrounds = [
 {bg: "earth", color: 'rgb(248, 198, 119)'},
 {bg: "cliff", color: 'darkgreen'}, 
 {bg: "well", color: "red"},
 {bg: "canyon", color: 'pink'}, 
//  {bg: "lake", color: 'gray'}
]


const [background, setBackground] = useState(`earth`) // good
const [scream, setScream] = useState('')
// hmmm
const [message, setMessage] = useState('')

const matchingBg = backgrounds.filter((bg) => bg.bg === background)[0]


const handleScream = e => {
  // set scream
  const {value} = e.target
  setScream(value)


  // set validation message
  const timeout = setTimeout(() => {
    setMessage('yeah though')
  }, 1000);
  
  return () => {
        clearTimeout(timeout);

      }
}


// WONDERING if I can reconfigure to make message disappear
// useEffect(() => {
//   const timeout = setTimeout(() => console.log(`make the message disappear`), 1000);
//   return () => {
//     clearTimeout(timeout);
//   }
// }, [message]);





  return (

    <div className={`${background} container`}>
      
      
        <textarea style={{color: matchingBg.color}} 
        spellCheck="false" 
        type="text" 
        value={scream} 
        onChange={handleScream} 
        placeholder="insert scream here"/>
        {/* at the very least could hit enter to submit */}

        <div className="button-container">
        {backgrounds.map((bg) => (
        <button key={bg.bg}  onMouseOver={() => setBackground(`${bg.bg}`)}>{bg.bg}!</button> 
        ))} 
        </div>
        <h1>{message}</h1>
    </div>
   
  );
}

export default App;

