import React from 'react';
import '../styles/patientCart.css';
import { useParams } from 'react-router-dom';

const PatientCart = () => {
  const params = useParams();
  const id = params.id

  return (
    <div>
      PatientCart id: {id}
    </div>
  )
}

export default PatientCart