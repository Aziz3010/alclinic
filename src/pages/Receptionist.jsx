import React from 'react';
import '../styles/receptionist.css';
import { useParams } from 'react-router-dom';

const Receptionist = () => {
  const params = useParams();
  const id = params.id
  
  return (
    <div>
      Receptionist: {id}
    </div>
  )
}

export default Receptionist;