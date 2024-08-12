import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../contexts/authContext';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import FirstStep from './FirstStep';
import History from './History';
import Searchbar from './Searchbar';
import ContactUs from './ContactUs';
import Services from './Services';
import AdminDashboard from '../admin/AdminDashboard';
import AdminServiceList from '../admin/AdminServiceList';
import Navbar from './Navbar';
import ManageUsers from '../admin/ManageUsers';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/firststep" element={<FirstStep />} />
          <Route path="/history" element={<History />} />
          <Route path="/searchbar" element={<Searchbar />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/admin/AdminServiceList" element={<AdminServiceList />} />
          <Route path='/admin/ManageUsers' element={<ManageUsers/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
