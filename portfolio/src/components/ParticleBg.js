import React from 'react';
import { ParticlesAttrs } from './ParticlesAttrs.js';
import Particles from 'react-particles-js';


const ParticleBg = () => {
    return (
        
            <Particles 
            className="header-bg" 
            params={ParticlesAttrs} 
            />
        
    )
}

export default ParticleBg;