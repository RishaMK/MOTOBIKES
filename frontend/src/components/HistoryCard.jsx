import React from 'react';

const HistoryCard = ({ user, email, model, service, requested, last_update }) => {
  return (
    <div className="record-content">
      <h4>User: {user}</h4>
      <h4>Email: {email}</h4>
      <h4>Model: {model}</h4>
      <h4>Service Type: {service}</h4>
      <h4>Requested: {requested}</h4>
      <h4>Last updated: {last_update}</h4>
    </div>
  );
}

export default HistoryCard;
