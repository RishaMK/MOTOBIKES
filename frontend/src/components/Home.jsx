import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Home.css';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';

const Home = () => {

  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div className="home-container">
      <div className="home-text">
        <div className="content-wrapper">
          <h1>MOTOBIKES</h1>
          <button onClick={()=>{doSignOut().then(()=>{navigate('/login')})}}>logout</button>   {/* add in this button into navbar */}
          <h4>Welcome to our bike service center! We're here to ensure that your two-wheeled companion receives the care and attention it deserves. Whether you're in need of a routine check-up, repairs, or a complete overhaul, our team of experienced technicians is ready to provide top-notch service.Welcome to our bike service center! We're here to ensure that your two-wheeled companion receives the care and attention it deserves. Whether you're in need of a routine check-up, repairs, or a complete overhaul, our team of experienced technicians is ready to provide top-notch service.</h4>
        </div>
        <Link to='/FirstStep' className='book-link'><div className='book-btn'>Service <br></br>Registration</div></Link>
      </div>
      <div className="img-container">
          
      </div>
    </div>
  );
};

export default Home;
