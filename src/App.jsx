import React from 'react';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesComponent from "./components/particlesbkg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToggle from './components/ScrollToggle';

export default function App() {
  return (
   <div className="app-container">
    <ParticlesComponent/>
      <Home/>
      <Projects/>
      <Experience/>
      <ScrollToggle/>
   </div>
  );
}

