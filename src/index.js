import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Button from 'react-bootstrap/Button';
import Proj from './project/Props/Proj'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ref from './project/Ref';
import { Card, Modal, Table } from 'react-bootstrap';
import Example1 from './project/Example1'
import Memo from './project/Memo';
import Memo2 from './project/Memo2';
import Callback from './Callback1';
import Callback3 from './project/Callback3';
import Ex1 from './project/Context';
import Display from './project/Contextex2';
import Environment from './project/Environment';
import App from './App';
import  store  from './redux/store';
import { Provider } from 'react-redux';
import Form from './LoginProject/Form';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
