import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const UpdateBikeService = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        model: '',
        service_type: ''
    });

    useEffect(() => {
        loadService();
    }, []);

    const loadService = async () => {
        try {
            const response = await axios.get(`http://localhost:5555/${id}`);
            setFormData(response.data);
        } catch (error) {
            console.error("Error fetching the service data", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5555/${id}`, formData);
            // Navigate to home page or any other route
            window.location.href = '/';
        } catch (error) {
            console.error("Error updating the service data", error);
        }
    };

    return (
        <>
        <Navbar/>
        <div style={styles.container}>
            <h2 style={styles.heading}>Update Bike Service</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="user_name" style={styles.label}>Owner</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="user_email" style={styles.label}>Email</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="model" style={styles.label}>Bike Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="service_type" style={styles.label}>Service Type</label>
                    <input
                        type="text"
                        id="service_type"
                        name="service_type"
                        value={formData.service_type}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Update</button>
            </form>
        </div>
        </>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '16px',
    },
    label: {
        marginBottom: '8px',
        fontWeight: 'bold',
    },
    input: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
        width: '100%',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default UpdateBikeService;
