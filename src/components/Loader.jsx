import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return <div className='loader_box'>
        <Oval color='#2a9d8f' secondaryColor='#777' height={70} width={70} />
    </div>
}

export default Loader;