import React from "react";
import "./App.css";
import CustomerAdd from "./project/CustomerAdd";
import { Provider } from "react-redux";
import { store } from "./project/store";
import CustomerView from "./project/CustomerView";
import FromProject from "./LoginProject/Form";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>React Redux example</h1>
       <CustomerAdd/>  
       <CustomerView/>
       {/* <FromProject/> */}
   </div> 
    </Provider>
   
  );
}

export default App;
