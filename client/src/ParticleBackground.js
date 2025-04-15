import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "transparent"
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            push: { quantity: 5 },
            repulse: { distance: 100, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1.2,
            straight: false
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }}
    />
  );
}

export default ParticleBackground;
