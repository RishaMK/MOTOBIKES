// // AdminServiceList.jsx
// import React from "react";
// import { useAuth } from '../../contexts/authContext';
// import { Navigate } from "react-router-dom";

// const AdminServiceList = () => {
//     const { isAdmin, userLoggedIn } = useAuth();

//     if (!userLoggedIn) {
//         return <Navigate to="/login" />;
//     }

//     if (!isAdmin) {
//         return <div>Please log in as an admin to access the services list.</div>;
//     }

//     return (
//         <div>
//             <h1>Admin Service List</h1>
//             {/* Your admin service list content goes here */}
//         </div>
//     );
// };

// export default AdminServiceList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/authContext';
import { Navigate } from 'react-router-dom';

const AdminServiceList = () => {
    const { isAdmin, userLoggedIn } = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() => {
        if (isAdmin) {
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
    }, [isAdmin]);

    if (!userLoggedIn) {
        return <Navigate to="/login" />;
    }

    if (!isAdmin) {
        return <div>Please log in as an admin to access the services list.</div>;
    }

    return (
        <div>
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
