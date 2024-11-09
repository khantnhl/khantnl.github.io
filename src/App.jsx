import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesComponent from "./components/particlesbkg";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
    <>


        <Router>
          
          <div className="app-container">

            <ParticlesComponent id="app-container"/>
            <div className="content">
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>  /* landing page */
                <Route path='/intro' element={<Intro/>}/>
                <Route path='/experience' element={<Experience/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
              

            </div>
            
          </div>

        </Router>


    </>
  )
}

export default App;
