import React from 'react';
import { Link } from "react-router-dom";
import './Services.css'; 
import Navbar from './Navbar';

const Services = () => {
    const soundEffects = {
        totalWash: "../../public/audios/waterSplash.mp3",
        oilChange: "../../public/audios/drippingOil.mp3",
        engineCheck: "../../public/audios/beepWarning.mp3",
    };

    const playSound = (serviceType) => {
        const audio = new Audio(soundEffects[serviceType]);
        audio.play();
    };

    return (
        <div>
            <Navbar />
            <div className="services-container">
                <h1>Our Services<br></br></h1>
                <br></br>
                <div className="services-list">
                    <div className="service">
                        <Link to="/FirstStep?serviceType=Total%20Wash%20of%20Motorcycle" 
                        className="service-link"
                        onClick={() => playSound('totalWash')}
                        >
                            <h2>Total Wash of Motorcycle</h2>
                        </Link>
                    </div>
                    <div className="service">
                        <Link to="/FirstStep?serviceType=Oil%20Change" className="service-link" onClick={() => playSound('oilChange')}>
                            <h2>Oil Change</h2>
                        </Link>
                    </div>
                    <div className="service">
                        <Link to="/FirstStep?serviceType=Engine%20Check" className="service-link" onClick={() => playSound('engineCheck')}>
                            <h2>Engine Check</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
