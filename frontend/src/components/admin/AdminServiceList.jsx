import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/authContext';
import AdminNavbar from './AdminNavbar';
import Searchbar from '../client/Searchbar';
import '../client/History.css'; 
import HistoryCard from '../client/HistoryCard';

const AdminServiceList = () => {
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
          setLoading(true);
          axios
            .get('http://localhost:5555/services')
            .then((response) => {
              setServices(response.data.data);
              setFilteredServices(response.data.data);
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

    const handleDelete = (id) => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/services/${id}`)
            .then(() => {
                setServices(services.filter(service => service._id !== id));
                setFilteredServices(filteredServices.filter(service => service._id !== id));
                setLoading(false);
            })
            .catch((error) => {
                console.error('An error occurred while deleting the service.', error);
                setLoading(false);
            });
    };

    return (
        <div>
            <AdminNavbar />
            <div className='history-container'>
                <h1 className='history-title'>SERVICES</h1>
                <Searchbar filterData={filterData} />
                <div className="history-records">
                    {filteredServices.slice().reverse().map((item, index) => (
                        <div className="record-container" key={index}>
                            <HistoryCard
                                id={item._id}
                                user={item.user_name}
                                email={item.user_email}
                                model={item.model}
                                service={item.service_type}
                                requested={formatDate(item.createdAt)}
                                last_update={formatDate(item.updatedAt)}
                                onDelete={handleDelete}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;
