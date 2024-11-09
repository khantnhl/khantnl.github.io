import React from "react";
import {useNavigate} from "react-router-dom";
import './Experience.css'

const Experience = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    return(
        <div className="card-container">
        
        <button onClick={goHome} className="cancel-button">X</button>
        <h1 className="title">Experiences</h1>

        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <img src="../../assets/btt.jpg" alt="btt image" className="image-content"></img>
                        <h3>AI/ML Intern</h3>
                        <p>Break Through Tech, UCLA</p>
                        <span>2023 - Present</span>
                    </div>
                </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-content">
                    <img src="../../assets/mepresenting.PNG" alt="btt image" className="image-content"></img>
                        <h3>Visiting Undergrad Researcher</h3>
                        <p>Caltech</p>
                        <span>Summer 2023</span>
                    </div>
                </div>
                
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-content">
                    <img src="../../assets/tutoring.png" alt="btt image" className="image-content"></img>
                        <h3>Math, CS Teaching Assistant</h3>
                        <p>Pasadena City College</p>
                        <span>2022 - Present</span>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Experience;