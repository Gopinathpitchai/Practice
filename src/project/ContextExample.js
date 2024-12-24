import React, { createContext, useContext } from "react";
const MyContext = createContext();
const ContextExample= () => {
  const value = "Hello from Context!";
  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
};
const ChildComponent = () => {
  
  const contextValue = useContext(MyContext);

  return <h1>{contextValue}</h1>;
};
export default ContextExample;
