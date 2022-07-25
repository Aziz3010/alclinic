import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Bookings from '../pages/Bookings';
import Doctor from '../pages/Doctor';
import DoctorBookings from '../pages/DoctorBookings';
import Doctors from '../pages/Doctors';
import Financial from '../pages/Financial';
import Home from '../pages/Home';
import Logout from '../pages/Logout';
import NotFound from '../pages/NotFound';
import PatientCart from '../pages/PatientCart';
import Patients from '../pages/Patients';
import Receptionist from '../pages/Receptionist';
import Receptionists from '../pages/Receptionists';
import Store from '../pages/Store';
import Subscribe from '../pages/Subscribe';
import Visita from '../pages/Visita';

const Routers = () => {
  return <Routes>
    <Route exact path='/' element={ <Navigate to='/home' /> } />
    <Route path='/home' element={ <Home /> } />
    <Route path='/subscribe/:qouta' element={ <Subscribe /> } />
    
    <Route path='/doctors' element={ <Doctors /> } />
    <Route path='/doctors/visita/:patientID' element={ <Visita /> } />
    <Route path='/doctor/bookings' element={ <DoctorBookings /> } />
    <Route path='/doctors/view/:id' element={ <Doctor /> } />
    <Route path='/doctors/edit/:id' element={ <Doctor /> } />

    <Route path='/receptionists' element={ <Receptionists /> } />
    <Route path='/receptionists/:id' element={ <Receptionist /> } />

    <Route path='/patients' element={ <Patients /> } />
    <Route path='/patients/:id' element={ <PatientCart /> } />
    
    <Route path='/bookings/:type' element={ <Bookings /> } />
    
    <Route path='/financial' element={ <Financial /> } />
    
    <Route path='/store' element={ <Store /> } />
    
    <Route path='/logout' element={ <Logout /> } />
    
    <Route path='*' element={ <NotFound /> } />
  </Routes>
}

export default Routers;