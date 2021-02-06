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

const matchingBg = backgrounds.filter((bg) => bg.bg === background)[0]


const handleScream = e => {
  const {value} = e.target
  setScream(value)
}

useEffect(() => {
  const timeout = setTimeout(() => console.log(`change this in a sec`), 1000);
  return () => clearTimeout(timeout);
}, [scream]);


  return (

    <div className={`${background} container`}>
      
      
        <textarea style={{color: matchingBg.color}} 
        spellCheck="false" 
        type="text" 
        value={scream} 
        onChange={handleScream} 
        placeholder="insert scream here"/>
        {/* at the very least could hit enter to submit */}

        <div className="bg-container">
        {backgrounds.map((bg) => (
        <button key={bg.bg}  onMouseOver={() => setBackground(`${bg.bg}`)}>{bg.bg}!</button> 
        ))} 
        </div>
    </div>
   
  );
}

export default App;

