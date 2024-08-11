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

    const handleLogoClick = () => {
      navigate('/home');
  };

  return (
    <div>
        <nav className='navbar'> 
            <div className="navbar-contents">
            <div 
                        className="navbar-logo" 
                        onClick={handleLogoClick}
                        role="button"
                        tabIndex={0}
                    />
            <div className="navbar-links">
                {userLoggedIn?
                <>
                <Link to='/services'>Services</Link>
                <Link to='/FirstStep'>Service Registration</Link>
                <Link to='/history'>History</Link>
                <Link to='/ContactUs'>Contact Us</Link>
                <button onClick={()=>{doSignOut().then(()=>{navigate('/login')})}} className='logout-button'>LOGOUT</button> </>:<>
                {/* <Link to='/login'><button className='logout-button'>LOGIN</button></Link>
                <Link to='/register'><button className='logout-button'>REGISTER</button></Link> */}
                </>} 
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
