import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Navbar from './Navbar';
import Card from './Card';

const Home = () => {
    const cards = [
        { text: "Explore our services.", link: "/services" },
        { text: "Book your service appointment.", link: "/FirstStep" },
        { text: "Check your service history.", link: "/history" },
        { text: "Learn more about our team.", link: "/about-us" },
        { text: "Contact us for support.", link: "/contact-us" }
    ];

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
                    <div className="card-carousel">
                        {cards.map((card, index) => (
                            <Card key={index} text={card.text} link={card.link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
