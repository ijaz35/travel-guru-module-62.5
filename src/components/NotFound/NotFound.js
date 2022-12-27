import React from 'react';
import image from '../../../src/images/404-page.jpg';

const NotFound = () => {
    return (
        <div className='w-100'>
            <img className='img-fluid' src={image} alt="" />
        </div>
    );
};

export default NotFound;