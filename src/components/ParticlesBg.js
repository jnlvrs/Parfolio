import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../Utils/ParticlesConfig";

function ParticlesBg() {
  return (
    <div>
      <Particles params={particlesConfig} className="particle" />
    </div>
  );
}

export default ParticlesBg;
