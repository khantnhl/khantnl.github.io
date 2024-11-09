import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    if(location.pathname !== '/')
    {
        return null
    }

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/intro">Intro</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;