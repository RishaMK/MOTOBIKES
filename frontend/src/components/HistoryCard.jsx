import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { deleteBikeService, getBikeServices } from './api'; // Import your API functions
import { Link } from 'react-router-dom';
import './FirstStep.css';

const HistoryCard = ({ id, user, email, model, service, requested, last_update }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {
            const response = await axios.get('http://localhost:5555/'); // Adjust URL as per your backend
            setServices(response.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                await deleteBikeService(id);
                loadServices();
            } catch (error) {
                console.error('Error deleting service:', error);
            }
        }
    };

  

    return (
        <div className="record-content">
            <h4>User: {user}</h4>
            <h4>Email: {email}</h4>
            <h4>Model: {model}</h4>
            <h4>Service Type: {service}</h4>
            <h4>Requested: {requested}</h4>
            <h4>Last updated: {last_update}</h4>

            {/* Edit and Delete buttons */}
            <div>
            <Link className="editButton" to={`/${id}`}>
                    <button>Edit</button>
                </Link>
                <button  className="deleteButton"onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};



export default HistoryCard;
