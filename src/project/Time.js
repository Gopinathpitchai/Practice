import { useState , useEffect } from "react";

function Time(){
    const [count ,setcount] = useState(1);
    useEffect(()=>{
        if (count > 10){
            setcount(1);
        }    
        if (count < -10 ){
            setcount(-1);
        }    
        
    },[count])
    function updateCount(){
        setcount((c)=> {return c+1})
    }

    function discreseCount(){
        setcount((count)=> {return count-1})
    }
    return <>
              <h2>TO INCRESE THE {count} time!</h2>
              <button onClick={updateCount}>Increase count</button>
              <button onClick={discreseCount}>Discrese count</button>
    
            </>
}

export default Time;