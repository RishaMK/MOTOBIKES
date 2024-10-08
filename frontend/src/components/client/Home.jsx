import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import CardCarousel from './CardCarousel';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home-container">
                <div className="home-text">
                    <div className="content-wrapper">
                        <h1>MOTOBIKES</h1>
                        <h4>
                            Welcome to our bike service center! We're here to ensure that your two-wheeled companion
                            receives the care and attention it deserves. Whether you're in need of a routine check-up,
                            repairs, or a complete overhaul, our team of experienced technicians is ready to provide
                            top-notch service. Welcome to our bike service center! We're here to ensure that your
                            two-wheeled companion receives the care and attention it deserves. Whether you're in need
                            of a routine check-up, repairs, or a complete overhaul, our team of experienced technicians
                            is ready to provide top-notch service.
                        </h4>
                    </div>
                </div>
                <div className="cards-container">
                    <CardCarousel />
                </div>
            </div>
        </div>
    );
};

export default Home;
