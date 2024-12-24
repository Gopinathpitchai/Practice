import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

function Memo() {
    const [number,setNumber]=useState(0);
    const handleInputchange=(event)=>{
        const inputValue=parseInt(event.target.value);
        setNumber(inputValue)

    }

    const computeFactorial=(n)=>{
        let result=1;
        for(let i=1;i<=n;i++){
            result*=i;
        }
        return result;
    }

    const memoizedFactorial=useMemo(()=>
        computeFactorial(number)

    ,[number])
  return (
    <div>
      <input type="number" value={number} onChange={handleInputchange}/>
      <p>Factorial of {number}is:{memoizedFactorial}</p>
    </div>
  )
}

export default Memo;
