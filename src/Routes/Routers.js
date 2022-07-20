import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Bookings from '../pages/Bookings';
import Doctor from '../pages/Doctor';
import Doctors from '../pages/Doctors';
import Financial from '../pages/Financial';
import Home from '../pages/Home';
import Logout from '../pages/Logout';
import NotFound from '../pages/NotFound';
import PatientCart from '../pages/PatientCart';
import Patients from '../pages/Patients';
import Receptionist from '../pages/Receptionist';
import Receptionists from '../pages/Receptionists';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
import Store from '../pages/Store';

const Routers = () => {
  return <Routes>
    {/* <Route path='/login' element={ <Login /> } /> */}
    {/* <Route path='/register' element={ <Register /> } /> */}
    <Route exact path='/' element={ <Navigate to='/home' /> } />
    <Route path='/home' element={ <Home /> } />
    <Route path='/doctors' element={ <Doctors /> } />
    <Route path='/doctors:id' element={ <Doctor /> } />
    <Route path='/receptionists' element={ <Receptionists /> } />
    <Route path='/receptionists:id' element={ <Receptionist /> } />
    <Route path='/patients' element={ <Patients /> } />
    <Route path='/patients:id' element={ <PatientCart /> } />
    <Route path='/bookings' element={ <Bookings /> } />
    <Route path='/financial' element={ <Financial /> } />
    <Route path='/store' element={ <Store /> } />
    <Route path='/logout' element={ <Logout /> } />
    <Route path='*' element={ <NotFound /> } />
  </Routes>
}

export default Routers;