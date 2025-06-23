import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './styles/global.css';

//Finds the <div id="root"></div> in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//Starts your React app inside the root div
root.render(
    <React.StrictMode> 
        <App/>
    </React.StrictMode>
);