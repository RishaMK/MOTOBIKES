import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import AdminNavbar from "./AdminNavbar";
import './AdminDashboard.css'

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    return <p>Please log in to access the dashboard.</p>;
  }

  const handleViewAllServices = () => {
    navigate('/admin/AdminServiceList');
  };
  const handleViewAllUsers = () => {
    navigate('/admin/ManageUsers');
  };

  return (
    <div>
      <AdminNavbar />
      <center><h1 className="headingadmin">Admin Dashboard</h1>
        <button id="adminDButton" onClick={handleViewAllServices}>
          View Services
        </button>
        <button id="adminDButton" onClick={handleViewAllUsers}>
          View Users
        </button>
      </center>
    </div>
  );
};

export default AdminDashboard;
