import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import './Contact.css';

const Contact = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    }
  return (
    <div className="card-container">

      <button onClick={goHome} className="cancel-button">X</button>
      
      <form className="contact-form">
        <div className='pretext'>
          <h2>CONTACT</h2>
          <p>I am using this form to prevent email spam. Feel Free to Fill Out!</p>
        </div>
        <div className="important-group">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" required></textarea>
        </div>
        <div className='button-group'>
          <button type="submit" className="submit-button send-button">SEND MESSAGE</button>
          <button type="reset" className="submit-button">RESET</button>
        </div>
      </form>

      {/* Social Media Buttons */}
      <div className="social-buttons">
        <a href="https://github.com/khantnhl" target="_blank" rel="noopener noreferrer" className="social-button github">
          <i className="fab fa-github"></i> 
        </a>
        <a href="https://linkedin.com/in/khant-hlaing" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
          <i className="fab fa-linkedin"></i> 
        </a>
        <a href="https://youtube.com/@lordnuu" target="_blank" rel="noopener noreferrer" className="social-button youtube">
          <i className="fab fa-youtube"></i> 
        </a>
      </div>

      <div className="resume-container">
        <a href="drive" target="_blank" rel="noopener noreferrer" className="resume">
        <i className="fas fa-download"></i> RESUME
        </a>
      </div>

    </div>
  );
};

export default Contact;