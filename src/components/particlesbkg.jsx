import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false); // Initialize state for `init`


    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
          particles: {
            number: {
              value: 245,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#000000",
              },
            },
            opacity: {
              value: 0.426,
              random: false,
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: true,
              },
            },
            links: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 0.99,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: { 
              onhover: {
                enable: true,
                mode: "grab", // Set to grab mode on hover
              },
              onclick: {
                enable: true,
                mode: "push", // Set to push mode on click
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 150, // Adjusted for better grab interaction
                line_linked: {
                  opacity: 0.7,
                },
              },
              push: {
                quantity: 4, // Number of particles to add on click
              },
            },
          },
          retina_detect: true,
        }),
        []
      );

    return init ? <Particles id={props.id} init={particlesLoaded} options={options}/> : null; 
};

export default ParticlesComponent;
