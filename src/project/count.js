import { useState } from "react";

function Num(){

    const [count ,setcount] =useState(0);

    return(
        <>
           <h1>Count:{count}</h1>
           <button onClick={()=> setcount((value)=> value -1)}>-</button>
           <button onClick={()=> setcount((value)=> value +1)}>+</button>
        
        </>
    );
}

export default Num;