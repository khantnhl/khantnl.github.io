import React from "react";
import {Typewriter} from "react-simple-typewriter"; // Use the correct default import
import {useState, useEffect} from 'react';

const Home = () => {

    return (
    <section id="about">
      <div className="card-container">
            <div className="card-content">

            <img  className='myphoto' src="../../assets/myphoto.JPG"></img>
                <p> 
                I’m a junior transferring from community college to University of California in Fall 2025.
                I’ve previously interned at Caltech, BreakThroughTechAI and CariCon.org, where I collaborated with teams on machine learning and <br/>full-stack projects. 
                <br/>Feel free to reach out—whether to chat or connect about software engineering opportunities. 
                Let's connect!
                </p>
            </div>
      </div>
    </section>
    )
}

export default Home;