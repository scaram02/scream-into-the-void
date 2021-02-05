import React, {useEffect, useState} from 'react'
import './home.css';



const App = () => {

const backgrounds = [
 {bg: "earth"},
 {bg: "cliff"}, 
 {bg: "well"},
 {bg: "canyon"}, 
 {bg: "lake"}
]

const [background, setBackground] = useState('earth')
const [scream, setScream] = useState('')

const handleScream = e => {
  const {value} = e.target

  setScream(value)
}

// keep as is or make textarea transparent?
  return (

    <div className={`${background} container`}>
      <div className="bg-container">
        {backgrounds.map((bg) => (
        <button key={bg.bg}  onMouseOver={() => setBackground(bg.bg)}>{bg.bg}</button> 
        ))} 
        </div>
      
        <textarea type="text" value={scream} onChange={handleScream}/>
        {/* at the very least could hit enter to submit */}
        {/* <h1>{scream}</h1> */}
    </div>
   
  );
}

export default App;

