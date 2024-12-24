import React, { useReducer } from 'react';

const initialState = { num1:" " , num2: "", sum: "" };

const ReducerEx2 = (state, action) => {
  switch (action.type) {
    case 'setNum1':
      return { ...state, num1: action.payload };
    case 'setNum2':
      return { ...state, num2: action.payload };
    case 'add':
      return { ...state, sum: state.num1 + state.num2 };
    default:
      return state;
  }
};

const AddTwoNumbers = () => {
  const [state, dispatch] = useReducer(ReducerEx2, initialState);

  return (
    <div>
      <h1>Sum: {state.sum}</h1>
      <input 
        type="number" 
        value={state.num1} 
        onChange={(e) => dispatch({ type: 'setNum1', payload: parseInt(e.target.value)  })} 
        placeholder="Enter first number"
      />
      <input 
        type="number" 
        value={state.num2} 
        onChange={(e) => dispatch({ type: 'setNum2', payload: parseInt(e.target.value)  })} 
        placeholder="Enter second number"
      />
      <button onClick={() => dispatch({ type: 'add' })}>Add</button>
    </div>
  );
}

export default AddTwoNumbers;
