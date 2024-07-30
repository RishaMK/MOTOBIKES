import React from 'react';
import { useAuth } from "../../contexts/authContext/index.jsx";

const AdminServiceItem = ({ service }) => {
  const { currentUser, userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    return <p>Please log in as an admin to access the services list.</p>;
  }

  return (
    <div>
      <h3>{service.user_name}</h3>
      <p>{service.user_email}</p>
      <p>{service.model}</p>
      <p>{service.service_type}</p>
    </div>
  );
};

export default AdminServiceItem;
