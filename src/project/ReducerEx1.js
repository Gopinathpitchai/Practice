import React, { createContext, useReducer } from 'react'

const Increment=createContext();

const initialState={ count:0,name1:""};

const reducer=(state,action)=>{
    switch (action.type){
        case 'increment':
            return { count: state.count+1};
            case 'decrement':
            return { count: state.count-1};

            case 'changename':
                return {name1:"Gopinath"}
    }
}

// const IncrementProvider=({})=>{
//   const[]
// }
const ReducerEx1 = () => {
    const[state ,dispathch]=useReducer( reducer,initialState )
  return (
    <div>
      <h1>hello world!</h1>
      <p>count:{state.count}</p>
      <button onClick={()=>dispathch({ type:"increment"})}>Increment</button>
      <button onClick={()=>dispathch({ type:"decrement"})}>decrement</button>
      <button onClick={()=>dispathch({ type:"changename"})}>changename</button>
      

      <p>name:{state.name1}</p>
    </div>
  )
}

export default ReducerEx1;
