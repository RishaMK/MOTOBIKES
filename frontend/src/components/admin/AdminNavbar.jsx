import React from 'react'
import './AdminNavbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth';
import { useAuth } from '../../contexts/authContext';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div>
      <nav className='admin-navbar'>
        <div className="admin-navbar-contents">
          <Link to='/admin/AdminDashboard'><div className="admin-navbar-logo"></div></Link>
          <div className="admin-navbar-links">
            {userLoggedIn ?
              <>
                <Link to='/admin/AdminServiceList'>View Services</Link>
                <Link to='/admin/ManageUsers'>View Users</Link>
                <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='admin-logout-button'>LOGOUT</button> </> : <>
              </>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminNavbar