//App.jsx is the main (root) React component of your application.
//It acts as the central layout and controller for your entire website.

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
    return(
        <Router>
            <div className = "app">
            <Navbar/>

            {/*page routing */}
            <Routes>
            <Route path ="/" element = {<Home/>}/>
            <Route path ="/about" element = {<About/>}/>
            <Route path ="/projects" element = {<Projects/>}/>
            <Route path ="/contact" element = {<Contact/>}/>
            </Routes>
            <Footer/>
            </div>

        </Router>
    );
};

export default App;


//App.jsx is like the skeleton of your website.
//It holds the menu, the content, and the footer all in one place.
//It controls the structure of your whole site.

//It connects React Router to your pages.

//It keeps shared components (like Navbar) visible across all pages.