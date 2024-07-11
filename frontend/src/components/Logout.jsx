import React from 'react';
import { useHistory } from 'react-router-dom';
import './logout.css';

const Logout = () => {
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    // Clear user session
    localStorage.removeItem('user');
    // Redirect to home
    history.push('/');
    window.location.reload();
  };

  return (
    <a href="/" className="logout-button" onClick={handleLogout}>
      Logout
    </a>
  );
};

export default Logout;
