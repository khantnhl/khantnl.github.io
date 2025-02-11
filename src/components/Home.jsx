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
                I’m a junior transferring from community college to one of the UCs—hopefully to Berkeley. 
                I’ve had the opportunity to intern at Caltech and through the BreakThroughTechAI program at UCLA, where I collaborated with teams on exciting machine learning and full-stack projects. 
                Feel free to reach out—whether to chat or connect about software engineering opportunities. 
                You can email me above!
                </p>
            </div>
      </div>
    </section>
    )
}

export default Home;