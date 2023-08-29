import React from 'react';
import ReactDOM from 'react-dom/client';
//import Login from './component/login';
//import LoggedIn from './component/loggedinsuccessful';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
/**
root.render(
  <React.StrictMode>
    <LoggedIn />
  </React.StrictMode>
); */

root.render(
    <React.StrictMode>
         <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  );