import React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from './Particle.config';

const Particlebackground = () => {
    return (
       <Particles params={particlesConfig} ></Particles>
    );
};

export default Particlebackground;