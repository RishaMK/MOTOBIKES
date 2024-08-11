import React from 'react';
import Card from './Card';
import './CardCarousel.css';

const cards = [
    { text: "Explore our services.", link: "/services" },
    { text: "Book your service appointment.", link: "/FirstStep" },
    { text: "Check your service history.", link: "/history" },
    { text: "Contact us for support.", link: "/ContactUs" }
];

const CardCarousel = () => {
    return (
        <div className="card-container">
            <div className="card-wrapper">
                {cards.map((card, index) => (
                    <Card key={index} text={card.text} link={card.link} />
                ))}
                {/* Duplication of cards for continuous effect */}
                {cards.map((card, index) => (
                    <Card key={index + cards.length} text={card.text} link={card.link} />
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;
