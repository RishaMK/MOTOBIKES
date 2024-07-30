// frontend/src/components/admin/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import Navbar from '../Navbar';

const AdminDashboard = () => {
  const { currentUser, userLoggedIn, isAdmin } = useAuth();

  if (!userLoggedIn) {
    return <p>Please log in to access the dashboard.</p>;
  }

  if (!isAdmin) {
    return <p>Access denied. Admins only.</p>;
  }

  return (
    <div>
      <Navbar />
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/AdminServiceList">View All Services</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
