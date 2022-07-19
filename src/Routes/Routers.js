import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Bookings from '../pages/Bookings/Bookings';
import Doctor from '../pages/Doctor/Doctor';
import Doctors from '../pages/Doctors/Doctors';
import Financial from '../pages/Financial/Financial';
import Home from '../pages/Home/Home';
import Logout from '../pages/Logout/Logout';
import NotFound from '../pages/NotFound/NotFound';
import PatientCart from '../pages/Patient/PatientCart';
import Patients from '../pages/Patients/Patients';
import Receptionist from '../pages/Receptionist/Receptionist';
import Receptionists from '../pages/Receptionists/Receptionists';
// import Login from '../pages/Login/Login';
// import Register from '../pages/Register/Register';
import Store from '../pages/Store/Store';

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