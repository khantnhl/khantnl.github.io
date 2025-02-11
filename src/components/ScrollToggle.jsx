import React, {useState, useEffect} from 'react';

const scrollTop = () => {
    const[isVisible, setisVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.scrollY > 0) {
                setisVisible(true)
            } else {
                setisVisible(false)
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        isVisible && 
        (<div className="scroll-container">
            <a
            className="up"
            onClick= {()=> window.scrollTo({top: 0, behavior: "smooth"})}
            >
            <i className="icon fa fa-chevron-up" aria-hidden='true'></i>
            </a>

            <ul className="scroll-menu">
                <li onClick={() => document.getElementById("about").scrollIntoView({behavior:"smooth"})}>About</li>
                <li onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</li>
                <li onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}>Experience</li>
            </ul>
        </div>)
    );
};

export default scrollTop;