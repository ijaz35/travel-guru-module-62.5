import React from 'react';
import background from '../../../src/images/Rectangle 1.png'
import bg2 from '../../../src/images/bg-tarnsprant.png'
import './Home.css'
import Slider from '../Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <div className='w-100 position-relative '>
                <img className='img-fluid' src={background} alt="" />
                <div className='transparent-background-img'>
                    <img className='img-fluid' src={bg2} alt="" />
                </div>

            </div>
            <div className='position-absolute top-50 row  d-flex w-100'>
                <div className='banner-left col-md-6'>
                    <h1 className='place-title text-white text-uppercase'>cox's bazar</h1>
                    <p className='place-info  text-white py-4'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className='booking-btn '>
                        <span className='me-3 '>Booking</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className='col-md-6 text-white '>
                    <Slider></Slider>
                </div>
            </div>

        </div>

    );
};

export default Home;