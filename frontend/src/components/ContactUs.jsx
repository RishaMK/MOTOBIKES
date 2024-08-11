import React from 'react';
import './ContactUs.css';
import Navbar from './Navbar';

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-us-container">
                <h1>Contact Us</h1>
                <div className="contact-us-content">
                    <p>Oops! Please check back later :) <br></br><br></br>This page is still under development under the guidance of assistant professors<br></br>Mrs. Kavyashree KR, Ms. Manasa C and Mrs. Anupama Girish.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
