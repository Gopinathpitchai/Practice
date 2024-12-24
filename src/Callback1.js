import React, { useState, useCallback } from 'react';

const Callback = () => {
   
   const [num1, setNum1] = useState();
   const [num2, setNum2] = useState();
   
   const ans = useCallback(() => {
      return adder(num1, num2);  
   }, [num1, num2]);  

   return (
      <div>
         <input
            placeholder="Adding Value"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
         />
         <input
            placeholder="Adding Value "
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
         />
         <p>Sum: {ans()}</p>
      </div>
   );
};

const adder = (a1, a2) => {
   return parseInt(a1) + parseInt(a2);  
};

export default Callback;
