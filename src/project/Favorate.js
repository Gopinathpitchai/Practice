import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState('blue');
  
    return <>
            <h1>My favorite color is {color}</h1>
            <button onClick={()=> { setColor('red') }}>change color</button>
            
            
          </> 
  }
  

export default FavoriteColor;