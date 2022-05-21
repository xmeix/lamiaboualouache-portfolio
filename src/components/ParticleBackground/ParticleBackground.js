import "./ParticleBackground.css";
import Particles from "react-particles-js";
const ParticleBackground = () => {
  return (
    <div className="particleBackground">
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1803.4120608655228,
              },
            },
            color: {
              value: "#a6dbed",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#a6dbed",
              },
              polygon: {
                nb_sides: 4,
              },
            },
            opacity: {
              value: 2,
              random: false,
              anim: {
                enable: false,
                speed: 0.2,
                opacity_min: 1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 0,
              color: "#ffffff",
              opacity: 0.3687847739990702,
              width: 0.6413648243462091,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 500,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 10,
                duration: 2,
                opacity: 8,
                speed: 1,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
