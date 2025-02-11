import React from "react";
import './Experience.css'

const Experience = () => {

    const scrollback = () => {
        const introSection = document.getElementById('intro');
        if(introSection){
            introSection.scrollback({ behavior: 'smooth' });
        }
    }

    return(
        <section id="experience">
            <div className="card-container">
            
                <h1 className="title">Experiences</h1>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <img src="../../assets/btt.jpg" alt="btt image" className="image-content"></img>
                            <h3>AI/ML Intern</h3>
                            <p>Break Through Tech, UCLA</p>
                            <span>2023 - Present</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <img src="../../assets/mepresenting.PNG" alt="btt image" className="image-content"></img>
                                <h3>Visiting Undergrad Researcher</h3>
                                <p>Caltech</p>
                                <span>Summer 2023</span>
                        </div>
                    </div>
                    
                    <div className="timeline-item">
                            <div className="timeline-content">
                                <img src="../../assets/tutoring.png" alt="btt image" className="image-content"></img>
                                    <h3>Math, CS Teaching Assistant</h3>
                                    <p>Pasadena City College</p>
                                    <span>2022 - Present</span>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;