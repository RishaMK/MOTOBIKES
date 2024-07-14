import React from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

  return (
    <div>
        <nav className='navbar'> 
            <div className="navbar-contents">
            <div className="navbar-logo"></div>
            <div className="navbar-links">
                {userLoggedIn?
                <><Link to='/home'>Home</Link>
                <Link to='/FirstStep'>Service Registration</Link>
                <Link to='/history'>History</Link>
                <button onClick={()=>{doSignOut().then(()=>{navigate('/login')})}} className='logout-button'>LOGOUT</button> </>:<>
                <Link to='/login'><button className='logout-button'>LOGIN</button></Link>
                <Link to='/register'><button className='logout-button'>REGISTER</button></Link>
                </>} 
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar