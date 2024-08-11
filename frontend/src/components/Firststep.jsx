import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FirstStep.css';
import Navbar from './Navbar';
import { useAuth } from '../contexts/authContext';

const FirstStep = () => {
    const [fullname, setFullName] = useState('');
    const [model, setModel] = useState('');
    const [service, setService] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useAuth();



    const handleSubmit = (event) => {
        event.preventDefault();
        const service_data = {
            user_name: fullname,
            user_email: currentUser.email,
            model: model,
            service_type: service
        };

        setLoading(true);
        axios
            .post('http://localhost:5555/services', service_data)
            .then(() => {
                setLoading(false);
                alert('We have registered your request and will get back to you soon!');
                navigate('/home');
            })
            .catch((error) => {
                setLoading(false);
                alert('Error occurred, please check console or try again!');
                console.log(error);
            });
    };


    return (
        <div>
            <Navbar />
            <div className="first-step-container">
                <div className='first-step-deco'></div>
                <div className='first-step-nondeco'>
                    <div className="first-step-wrapper">
                        <div className="first-step-box">
                            <h1>REGISTER FOR SERVICE</h1>
                            <form onSubmit={handleSubmit} className='first-step-form'>
                                <div className='form-inputs'>
                                    <div className="input-labels">
                                        <label htmlFor="exampleInputName" className="">
                                            <strong>Name</strong>
                                        </label>
                                        <label htmlFor="exampleInputEmail" className="">
                                            <strong>Email</strong>
                                        </label>
                                        <label htmlFor="exampleInputModel" className="">
                                            <strong>Bike Model</strong>
                                        </label>
                                        <label htmlFor="exampleInputService" className="">
                                            <strong>Service</strong>
                                        </label>
                                    </div>
                                    <div className="inputs">
                                        <input
                                            type="text"
                                            placeholder="Enter Full Name"
                                            id="exampleInputName"
                                            onChange={(event) => setFullName(event.target.value)}
                                            required
                                        />
                                        <input
                                            type="email"
                                            placeholder={currentUser.email}
                                            value={currentUser.email}
                                            id="exampleInputEmail"
                                            readOnly
                                            style={{ color: "#5a5a5a" }}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Enter Bike Model"
                                            id="exampleInputModel"
                                            onChange={(event) => setModel(event.target.value)}
                                            required
                                        />
                                        <select
                                            id="exampleInputService"
                                            onChange={(event) => setService(event.target.value)}
                                            required
                                        >
                                            <option value="" disabled selected>Select a service</option>
                                            <option value="totalWash">Total wash of motorcycle</option>
                                            <option value="oilChange">Oil Change</option>
                                            <option value="engineCheck">Engine Check</option>
                                        </select>

                                    </div>
                                </div>
                                <button type="submit" className="register-btn" disabled={loading}>
                                    {loading ? 'Registering...' : 'REGISTER'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstStep;
