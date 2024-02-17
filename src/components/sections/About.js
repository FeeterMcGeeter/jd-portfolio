import React from 'react';
import Skills from './Skills';

const About = () => {
    return (
        <section id='about' className='about'>
            <h2 className='section-title'>
                About Me
            </h2>

            <div className='about-content'>
                <div className='about-image'></div>
                <p className='about-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eaque illo commodi aspernatur amet, dolores id? Atque beatae eveniet praesentium numquam labore doloribus veritatis suscipit sed autem, eligendi earum quibusdam.
                </p>
            </div>
            
            <Skills />
        </section>
    )
};

export default About;