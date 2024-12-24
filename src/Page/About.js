import React, { useState } from 'react'
import Navbar from "../Components/Navbar";

function About() {
  return (
    <div>
      <Navbar/>
      <h1>About</h1>
    </div>
  )

  // const Count=()=>{
  //   const[count,setCount]=useState(0);
  
  //   return(
  //     <div>
  //       <h1>Count:{count}</h1>
  //            <button onClick={()=> setCount((value)=> value -1)}>-</button>
  //            <button onClick={()=> setCount((value)=> value +1)}>+</button>
  //     </div>
  //   )
  
  // }
}



export default About
