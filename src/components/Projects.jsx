import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }
  return (
    <div className="card-container">
      <h1>SIDE PROJECTS</h1>
      <button onClick={goHome} className='cancel-button'> X</button>


      <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-content">

                        <img src="src/assets/taskflow.png" alt="btt image" className="image-content"></img>

                        <h3>TaskFlow AI</h3>
                        <p>Task Management Automation Tool with GPT-4o</p>
                    </div>
                </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <img src="src/assets/journeyai.png" alt="btt image" className="image-content"></img>

                        <h3>JourneyAI</h3>
                        <p>One-click AI Trip Planner with Gemini</p>
                    </div>
                </div>
                
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <img src="src/assets/sql.png" alt="btt image" className="image-content"></img>

                        <h3>SQL Database</h3>
                        <p>Console-based SQL prototype using various complex data structures such as B+ Trees</p>
                    </div>
                </div>
            </div>

    </div>
  );
};

export default Projects;