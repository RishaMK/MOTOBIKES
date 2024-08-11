import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import AdminNavbar from "./AdminNavbar";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { currentUser, userLoggedIn, isAdmin } = useAuth();

  if (!userLoggedIn) {
    return <p>Please log in to access the dashboard.</p>;
  }

  const handleViewAllServices = () => {
    navigate('/admin/AdminServiceList'); // Update the path based on your actual route
  };

  return (
    <div>
      <AdminNavbar />
      <h1>Admin Dashboard</h1>
      <br />
      <nav>
        <ul>
          <li>
            <button id="adminDButton" onClick={handleViewAllServices}>
              View All Services
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
