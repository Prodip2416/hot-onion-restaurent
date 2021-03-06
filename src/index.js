import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// npm install --save react-alert react-alert-template-basic

const options = {
  position: 'bottom center',
  timeout: 2000,
  offset: '250px',
  transition: 'scale',
  type: 'success'
}
ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AlertProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
