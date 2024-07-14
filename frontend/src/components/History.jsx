import React, { useEffect, useState } from 'react';
import './History.css';
import Navbar from './Navbar';
import HistoryCard from './HistoryCard';
import axios from 'axios';
import { useAuth } from '../contexts/authContext';

const History = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const { currentUser } = useAuth();
  console.log(currentUser.email);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/services?user_email=${currentUser.email}`) //first complex query let's fkn goooo
      .then((response) => {
        setServices(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert('An error occurred. Please check the console.');
        setLoading(false);
      });
  }, [currentUser.email]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(); 
  };

  return (
    <div>
      <Navbar />
      <div className='history-container'>
        <h1 className='history-title'>VIEW YOUR HISTORY</h1>
        <div className="history-records">
          {services.slice().reverse().map((item, index) => (
            <div className="record-container" key={index}>
              <HistoryCard
                user={item.user_name}
                email={item.user_email}
                model={item.model}
                service={item.service_type}
                requested={formatDate(item.createdAt)}
                last_update={formatDate(item.updatedAt)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
