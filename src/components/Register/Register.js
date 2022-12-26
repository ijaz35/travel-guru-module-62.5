import React from 'react';
import { Link } from 'react-router-dom';
import FormHeader from '../FormHeader/FormHeader';
import facebook from '../../../src/images/icons/fb.png';
import google from '../../../src/images/icons/google.png';
import './Register.css'

const Register = () => {
    return (
        <div className='w-100 position-relative'>
            <FormHeader></FormHeader>
            <div className="login-form-container ">
                <div className='register-form-inner w-100'>
                    <h2 className='w-75 mx-auto fw-bold mb-3'>Create an account</h2>

                    <form className='login-form w-75 mx-auto '>
                        <input className='my-4' type="text" name="firstName" id="firstName" placeholder='First Name' />
                        <input className='my-4' type="text" name="lastName" id="lastName" placeholder='Last Name' />
                        <input className='my-4' type="text" name="email" id="email" placeholder='User name or Email ' />
                        <input className='my-4' type="password" name="password" id="password" placeholder='Password' />
                        <input className='my-4' type="confirmPassword" name="password" id="confirmPassword" placeholder='Confirm Password' />
                        <input type="submit" className='d-block mt-0 booking-btn w-100  rounded-0 mt-5' value='Create an account' />

                    </form>
                    <div className='d-flex w-75 mt-4 mx-auto'>
                        <p className='me-2'>Already have an account?</p>
                        <Link to='/login' style={{ color: 'rgba(249, 165, 26, 1)' }}>Login</Link>
                    </div>
                </div>



                <div className='w-75 mx-auto d-flex align-items-center justify-content-evenly'>
                    <div className='styleDiv'></div>
                    <p className='mb-2 fw-bold'>Or</p>
                    <div className='styleDiv'></div>
                </div>

                <div className='login-btn-container w-75 mx-auto mt-4 mb-5'>
                    <button className='w-100  py-2  rounded-pill login-btn text-start'>
                        <img className='logo-icon ' src={facebook} alt="" />
                        <span>Continue with Facebook</span>
                    </button>
                    <button className='w-100  py-2  rounded-pill login-btn text-start mb-5'>
                        <img className='logo-icon ' src={google} alt="" />
                        <span>Continue with Google</span>
                    </button>
                </div>


            </div>

        </div >
    );
};

export default Register;