import React from 'react';
import CardCarousel from './CardCarousel';
import cardImageOne from '../../images/rachel-website.png';
import cardImageTwo from '../../images/wgu-project.png';
import cardImageThree from '../../images/clicky-game.png';
import cardImageFour from '../../images/giphy-app.png';

const Projects = () => {
    const cards = [
        <div key={1} className='project-card'>
            <img src={cardImageOne} alt='Card One' />

            <div className='card-content'>
                <h4 className='card-title'>
                    Customer Portfolio
                </h4>

                <p>
                    Portfolio website was completed for a customer using React and Sass
                </p>

                <a
                    className='card-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://feetermcgeeter.github.io/rachel-website/'
                >
                    Project Link
                </a>
            </div>
        </div>,
        <div key={2} className='project-card'>
            <img src={cardImageTwo} alt='Card Two' />

            <div className='card-content'>
                <h4 className='card-title'>
                    WGU Class Assignment
                </h4>

                <p>
                    Class assignment for Web Development course completed using HTML, CSS, and JavaScript
                </p>
                
                <a
                    className='card-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://feetermcgeeter.github.io/TNM2-Prototype/'
                >
                    Project Link
                </a>
            </div>
        </div>,
        <div key={3} className='project-card'>
            <img src={cardImageThree} alt='Card Three' />

            <div className='card-content'>
                <h4 className='card-title'>
                    Megaman Click Game
                </h4>

                <p>
                    Project completed in Full-Stack bootcamp using React
                </p>

                <a
                    className='card-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://feetermcgeeter.github.io/Clicky-Game/'
                >
                    Project Link
                </a>
            </div>
        </div>,
        <div key={4} className='project-card'>
            <img src={cardImageFour} alt='Card Four' />

            <div className='card-content'>
                <h4 className='card-title'>
                    Food GIF App
                </h4>

                <p>
                    Project completed in Full-Stack bootcamp using HTML, CSS, JavaScript, and jQuery
                </p>

                <a
                    className='card-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://feetermcgeeter.github.io/GIPHY-App/'
                >
                    Project Link
                </a>
            </div>
    </div>
    ];

    return (
        <section className='projects'>
            <h2 className='section-title'>Projects</h2>
            <CardCarousel cards={cards} />
        </section>
    )
};

export default Projects;