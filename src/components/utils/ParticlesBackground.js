"use client";
import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
const ParticlesBackground = ({ children }) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //   await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    autoPlay: true,
    background: {
      color: {
        value: "#333",
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
        value: "#eee",
      },
      links: {
        color: "#eee",
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
        // init={particlesInit}
        // loaded={particlesLoaded}
        options={options}
      />
      {children}
    </>
  );
};

export default ParticlesBackground;
