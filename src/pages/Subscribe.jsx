import React from 'react';
import { useParams } from 'react-router-dom';

const Subscribe = () => {
    const params = useParams();
    const qoutaLength = params.qouta.length;
    const qouta = params.qouta.slice(1,qoutaLength);

    return (
        <div>Subscribe In {qouta} Qouta</div>
    )
}

export default Subscribe