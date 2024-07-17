import React from 'react';
import { useNavigate } from 'react-router-dom';
import './History.css'

const HistoryCard = ({ user, email, model, service, requested, last_update, onDelete, id }) => {
  const navigate = useNavigate();

  // const handleEdit = () => {
  //   navigate(`/edit/${id}`);
  // };

  return (
    <div className="record-content">
      <h4>User: {user}</h4>
      <h4>Email: {email}</h4>
      <h4>Model: {model}</h4>
      <h4>Service Type: {service}</h4>
      <h4>Requested: {requested}</h4>
      <h4>Last updated: {last_update}</h4>
      {/* <button onClick={handleEdit}>Edit</button>  */}
      <button className='delete-card' onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default HistoryCard;
