import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-description'>
                <p>I'm <span>Jeff Davis</span></p>
                <p>A Web Developer</p>
                <p>Based in the Memphis area</p>
                <Link
                    to='projects'
                    spy={true}
                    smooth={true}
                    duration={200}
                    className='hero-btn'
                >
                    View Projects
                </Link>
            </div>

            <div className='hero-image'></div>
        </div>
    )
};

export default Hero;