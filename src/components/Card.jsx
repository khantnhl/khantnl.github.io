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
                My name is Khant, and I a junior soon Tranfering to UC. 
                Click on the contact tab to contact me.
                </p>
            </div>
        </div>


    )
}

export default Card;