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



  return (

    <div className={`${background} container`}>

      {backgrounds.map((bg) => (
        <button key={bg.bg}  onClick={() => setBackground(bg.bg)}>{bg.bg}</button> 
        ))} 
    </div>
   
  );
}

export default App;
