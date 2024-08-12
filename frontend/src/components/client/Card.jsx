import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ text, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const audio = new Audio('../../public/audios/engineRev.wav');
        audio.play();
        navigate(link);
    };

    return (
        <div className="card" onClick={handleClick}>
            <p>{text}</p>
        </div>
    );
};

export default Card;
