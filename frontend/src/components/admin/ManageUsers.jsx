import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageUsers.css'; // Create a CSS file for styling if needed
import AdminNavbar from './AdminNavbar';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from backend
        axios.get('http://localhost:5555/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div className="manage-users-container">
            <AdminNavbar/>
            <h1>Manage Users</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
