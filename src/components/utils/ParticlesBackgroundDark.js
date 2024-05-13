"use client";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackgroundDark = ({ children }) => {
  const [init, setInit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Inicjalizacja tsparticles
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    // Sprawdź obecny motyw i nasłuchuj zmian
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setIsDarkMode(mediaQuery.matches);

    handleChange(); // Ustaw stan na podstawie początkowej wartości
    mediaQuery.addEventListener("change", handleChange);

    // Usuń nasłuchiwacz podczas demontażu
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    autoPlay: true,
    background: {
      color: {
        value: !isDarkMode ? "#eee" : "#333",
      },
      opacity: 1,
    },
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: true,
            force: 60,
            smooth: 10,
          },
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: !isDarkMode ? "#333" : "#eee",
      },
      links: {
        color: !isDarkMode ? "#333" : "#eee",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5,
        },
        animation: {
          enable: true,
          speed: 3,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 10,
        },
        animation: {
          enable: true,
          speed: 20,
          sync: false,
        },
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    zLayers: 100,
  };

  return (
    <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      {children}
    </>
  );
};

export default ParticlesBackgroundDark;
