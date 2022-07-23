import React from 'react';
import '../styles/doctor.css';
import { useParams } from 'react-router-dom';

const Doctor = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div>Doctor: {id}</div>
  )
}

export default Doctor;