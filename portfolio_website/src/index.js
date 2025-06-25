import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
// method (function) Render (display) this component inside the HTML box I selected.
//React wrapper that helps you find mistakes and warns you about bad practices
//We are creating a variable called root
// ReactDOM.createRoot Hey, I want to start rendering my app inside this part of the page 
//It finds the HTML element with this line