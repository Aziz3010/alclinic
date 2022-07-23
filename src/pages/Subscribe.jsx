import React from 'react';
import { useParams } from 'react-router-dom';

const Subscribe = () => {
    const params = useParams();
    const qouta = params.qouta;

    return (
        <div>Subscribe In {qouta} Qouta</div>
    )
}

export default Subscribe