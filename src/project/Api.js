import React, { useEffect, useState } from 'react'

const Api = () => {
  const [response ,setReponse]=useState('')
    async function apicall(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'
          
          

        );
        setReponse(response)
        
        //const data= response.json();
        console.log(response);
        
    }
   useEffect(()=>{
    apicall();

   },[])


  return (
    <div>
      <h1>API</h1>
      <h1>{response.url}</h1> 
      <p>{response.id}</p>
      <p></p>
      
      <button onClick={apicall}>api call</button>
    </div>
  )
}

export default Api
