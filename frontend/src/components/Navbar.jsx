import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('user'); // Mock login status
  const username = "John Doe"; // Mock username

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      {isLoggedIn ? (
        <>
          <span className="nav-user">Hello, {username}</span>
          <Link to="/logout" className="nav-link">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
