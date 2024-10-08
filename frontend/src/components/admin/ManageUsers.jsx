import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageUsers.css';
import AdminNavbar from './AdminNavbar';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5555/users')
            .then(response => {
                setUsers(response.data.data); 
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    // const handleDelete = (uid) => {
    //     axios.delete(`http://localhost:5555/users/${uid}`)
    //         .then(() => {
    //             setUsers(users.filter(user => user._id !== uid));
    //         })
    //         .catch(error => {
    //             console.error('Error deleting user:', error);
    //         });
    // };
    

    return (
        <div className="manage-users-container">
            <AdminNavbar />
            <center><h1 className='heading'>USERS</h1></center>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.u_name}</td>
                            <td>{user.u_email}</td>
                            <td>{user.u_model}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
