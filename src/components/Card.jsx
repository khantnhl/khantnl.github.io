import React from "react";
import {useNavigate} from "react-router-dom";

const Card = () => {
    const navigate = useNavigate();
    
    const goHome = () => {
        navigate('/');
    }

    return(
        <div className="card-container">
            
            <img  className='myphoto' src="../../assets/myphoto.JPG"></img>
            <button onClick={goHome} className="cancel-button">
                {"X"}
            </button>

            <div className="card-content">
                <p> 
                My name is Khant, and I am a junior tranferring to one of UCs from community college, hopefully to Berkeley.
                I have previously interned at Caltech and the BreakThroughTechAI program at UCLA where I worked with teams on machine learning and full-stack projects.
                I haven't really get back to gaming because of the CS grind but I read Japanese manga occasionally; we can talk all day! Click on the contact tab to contact me.
                </p>
            </div>
        </div>


    )
}

export default Card;