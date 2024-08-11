import React from 'react'
import './AdminNavbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth';
import { useAuth } from '../../contexts/authContext';

const AdminNavbar = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

  // const handleLogout = async () => {
  //   try {
  //     await doSignOut();
  //     navigate('/login');
  //   } catch (error) {
  //     console.error('Logout failed:', error);
  //   }
  // };

  return (
    <div>
        <nav className='admin-navbar'> 
            <div className="navbar-contents">
            <div className="navbar-logo"></div>
            <div className="navbar-links">
                {userLoggedIn?
                <><Link to='/home'>Home</Link>
                <Link to='/admin/AdminDashboard'>Dashboard</Link>
                <Link to='/admin/ManageUsers'>Manage Users</Link>
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

export default AdminNavbar