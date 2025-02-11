import React from 'react';

const Projects = () => {

    const scrollback = () => {
        const introSection = document.getElementById('intro');
        if(introSection){
            introSection.scrollback({ behavior: 'smooth' });
        }
    }

  return (
    <section id="projects">
        <div className="card-container">
        <h1>SIDE PROJECTS</h1>
        {/* <button onClick={ scrollback } className='cancel-button'> X</button> */}


        <div className="timeline">
                <div className="timeline-item">
                        <div className="timeline-content">

                            <img src="../../assets/recsys.png" alt="btt image" className="image-content"></img>

                            <h3>Recommendation system</h3>
                            <span className="repo"><a href="https://github.com/khantnhl/CariConnect" target="_blank"> (Repo)</a></span>
                            <p>Uses Spectral Clustering, Cosine Similarity, 
                                GroqAPI and RAG techniques to match authors with publishers, 
                                providing personalized, data-driven suggestions</p>
                        </div>
                </div>
                <div className="timeline-item">
                        <div className="timeline-content">

                            <img src="../../assets/taskflow.png" alt="btt image" className="image-content"></img>

                            <h3>TaskFlow AI</h3>
                            <span className="repo"><a href="https://github.com/khantnhl/TaskFlow-AI" target="_blank"> (Repo)</a></span>
                            <p>Task Management Automation Tool with GPT-4o</p>
                        </div>
                </div>
                <div className="timeline-item">
                        <div className="timeline-content">
                            <img src="../../assets/journeyai.png" alt="btt image" className="image-content"></img>

                            <h3>JourneyAI</h3>
                            <span className="repo"><a href="https://github.com/TamSuj/JourneyAI"> (Repo)</a></span>
                            <p>One-click AI Trip Planner with Gemini</p>
                        </div>
                    </div>
                    
                <div className="timeline-item">
                        <div className="timeline-content">
                            <img src="../../assets/sql.png" alt="btt image" className="image-content"></img>

                            <h3>SQL Database</h3>
                            <span className="repo"><a href="https://github.com/khantnhl/Mini-SQL"> (Repo)</a></span>
                            <p>Console-based SQL prototype using various complex data structures such as B+ Trees</p>
                        </div>
                    </div>
                </div>

        </div>
    </section>
  );
};

export default Projects;