import  { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Navbar from "./NavBar"
import {Typewriter} from "react-simple-typewriter"; // Use the correct default import
import EXAMPLE from "../../swe_resume.pdf"

const ParticleComponent = () => {
  const [init, setInit] = useState(false);
  
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 8,
            size: 18,
            speed: 50,
          },
        },
      },
      particles: {
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 40,
            sync: true,
          },
        },
        links: {
          blink: false,
          color: "random",
          consent: false,
          distance: 60,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          enable: true,
          outModes: "bounce",
          speed: { min: 2, max: 2 },
        },
        number: {
          value: 300,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
          random: false,
          value: { min: 0.05, max: 1 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 5, max: 7 }
        }
      },

      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div id="particles-js">
      
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

        <div className="header">
          <div className="nav-links">
            <a className="link" href="#about" data-scroll>
              About Me
            </a>
            <a className="link" href="#projects" data-scroll>
              Projects
            </a>
            <a className="link" href="#experience" data-scroll>
              Experience
            </a>
          </div>
           <h1>
              <Typewriter
                words={["Hi, my name is Khant."]}
                typeSpeed={100}
                delaySpeed={1000}
              />
            </h1>
            <p>
              <Typewriter
                words={["I am passionate about Software Development, Deep Learning and Cyber Security."]}
                typeSpeed={50}
                deleteSpeed={10}
                delaySpeed={1000}
                loop={false}
              />
            </p>

          <div className="icon-container">
            <a href={EXAMPLE} target="_blank">
              Resume <i className="icon fa-solid fa-file-arrow-down" aria-hidden="true"></i>
            </a>
            <a id="circle-icon" href="https://github.com/khantnhl" target="blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a id="circle-icon" href="https://github.com/khantnhl" target="blank">
            <i className="fa-brands fa-linkedin" href="https://www.linkedin.com/in/khant-hlaing/" target="blank"></i>
            </a>
            <a id="circle-icon" href="mailto:khantnyihlaingkh@gmail.com?subject=Reaching Out">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>

        <a className="down" href="#about" data-scroll>
          <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </a>

      </div>
    );
  }

  //else
  return <></>;
};
export default ParticleComponent;