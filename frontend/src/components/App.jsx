import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import FirstStep from './FirstStep';
import Navbar from './Navbar';
import History from './History';
import Searchbar from './Searchbar';
import ContactUs from './ContactUs';
import Services from './Services';


function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '3.5rem' }}>

        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path='/firststep' element={<FirstStep/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/Searchbar' element={<Searchbar/>}/>

          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Services' element={<Services/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
