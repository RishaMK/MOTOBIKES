import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/authContext';
import { Navigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const AdminServiceList = () => {
    const { isAdmin, userLoggedIn } = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() => {
        if (userLoggedIn && isAdmin) {
            axios.get('http://localhost:5555/services', {
                headers: {
                    // Add any necessary headers, e.g., Authorization
                }
            })
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.error('Error fetching services:', error);
            });
        }
    }, [isAdmin, userLoggedIn]);

    // if (!userLoggedIn) {
    //     return <Navigate to="/login" />;
    // }

    // if (!isAdmin) {
    //     return <div>Please log in as an admin to access the services list.</div>;
    // }

    return (
        <div>
            <AdminNavbar />
            <h1>Admin Service List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Bike Model</th>
                        <th>Service Type</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service._id}>
                            <td>{service.user_name}</td>
                            <td>{service.user_email}</td>
                            <td>{service.model}</td>
                            <td>{service.service_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminServiceList;
