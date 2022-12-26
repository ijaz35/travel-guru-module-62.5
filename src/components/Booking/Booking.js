import React from 'react';
import background from '../../../src/images/Rectangle 1.png'
import bg2 from '../../../src/images/bg-tarnsprant.png'
import BookingForm from '../BookingForm/BookingForm';
import Header from '../Header/Header';


const Booking = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-100 position-relative '>
                <img className='img-fluid' src={background} alt="" />
                <div className='transparent-background-img'>
                    <img className='img-fluid' src={bg2} alt="" />
                </div>

            </div>
            <div className=' home-container position-absolute row  d-flex w-100'>
                <div className='banner-left col-md-6'>
                    <h1 className='place-title text-white text-uppercase'>cox's bazar</h1>
                    <p className='place-info  text-white py-4'>Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>

                </div>
                <div className='col-md-6 '>
                    <BookingForm></BookingForm>
                </div>
            </div>

        </div>
    );
};

export default Booking;