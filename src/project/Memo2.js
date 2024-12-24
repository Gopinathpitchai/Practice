import React, { useState, useMemo } from 'react';

function Memo2() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div>
      <h1>Simple useMemo Example</h1>
      <p>Num1: <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} /></p>
      <p>Num2: <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} /></p>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default Memo2;
