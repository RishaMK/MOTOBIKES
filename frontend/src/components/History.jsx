import React, { useEffect, useState } from 'react';
import './History.css';
import Navbar from './Navbar';
import HistoryCard from './HistoryCard';
import Searchbar from './Searchbar';
import axios from 'axios';
import { useAuth } from '../contexts/authContext';

const History = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser && currentUser.email) {
      setLoading(true);
      axios
        .get(`http://localhost:5555/services?user_email=${currentUser.email}`)
        .then((response) => {
          setServices(response.data.data);
          setFilteredServices(response.data.data); // Set filteredServices initially to all services
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          alert('An error occurred. Please check the console.');
          setLoading(false);
        });
    }
  }, [currentUser]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const filterData = (searchTerm) => {
    const filtered = services.filter(item =>
      item.user_name.toLowerCase().includes(searchTerm) ||
      item.model.toLowerCase().includes(searchTerm) ||
      item.service_type.toLowerCase().includes(searchTerm)
    );
    setFilteredServices(filtered);
  };

  return (
    <div>
      <Navbar />
      <div className='history-container'>
        <h1 className='history-title'>VIEW YOUR HISTORY</h1>
        <Searchbar filterData={filterData} />
        <div className="history-records">
          {filteredServices.slice().reverse().map((item, index) => (
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
