import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className='navbar'>
      <div className="navbar-contents">
        <div className="navbar-logo"></div>
        <div className="navbar-links">
          {userLoggedIn ?
            <>
              <Link to='/home'>Home</Link>
              <Link to='/firststep'>Service Registration</Link>
              {/* Add other links as needed */}
              <button onClick={handleLogout} className='logout-button'>LOGOUT</button>
            </>
            :
            <>
              <Link to='/login'><button className='logout-button'>LOGIN</button></Link>
              <Link to='/register'><button className='logout-button'>REGISTER</button></Link>
            </>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
