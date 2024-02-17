import React, { useState } from 'react';

const CardCarousel = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    return (
        <div className='card-carousel'>
            <button className='prev' onClick={prevCard}>
                <i className='fa-solid fa-chevron-left'></i>
            </button>
            <div className='cards-wrapper'>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${index === currentIndex ? 'active' : ''}`}
                    >
                        {card}
                    </div>
                ))}
            </div>
            <button className='next' onClick={nextCard}>
                <i className='fa-solid fa-chevron-right'></i>
            </button>
        </div>
    )
};

export default CardCarousel;