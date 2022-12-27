import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import FormHeader from '../FormHeader/FormHeader';
import facebook from '../../../src/images/icons/fb.png';
import google from '../../../src/images/icons/google.png';
import './Register.css'
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    //google signIn
    const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);

    //Facebook signin
    const [signInWithFacebook, user2, loading2, error3] = useSignInWithFacebook(auth);

    let errorElement;
    if (loading || updating || loading1 || loading2) {
        return <h1>Loading...</h1>

    }
    if (error || error1 || error2 || error3) {
        errorElement = <p>
            {error?.message}
            {error1?.message}
            {error2?.message}
        </p>
    }
    if (user || user1 || user2) {
        console.log(user);
        console.log(user1);
        console.log(user2);
        navigate('/');

    }
    const handleRegisterFormSubmit = async event => {
        event.preventDefault();
        const name = event.target.firstName.value + ' ' + event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name })
            toast('Email verification sent');
        }
    }

    return (
        <div className='w-100 position-relative'>
            <FormHeader></FormHeader>
            <div className="login-form-container ">
                <div className='register-form-inner w-100'>
                    <h2 className='w-75 mx-auto fw-bold mb-3'>Create an account</h2>

                    <form onSubmit={handleRegisterFormSubmit} className='login-form w-75 mx-auto '>
                        <input className='my-4' type="text" name="firstName" id="firstName" placeholder='First Name' />
                        <input className='my-4' type="text" name="lastName" id="lastName" placeholder='Last Name' />
                        <input className='my-4' type="text" name="email" id="email" placeholder='User name or Email ' />
                        <input className='my-4' type="password" name="password" id="password" placeholder='Password' />
                        <input className='my-4' type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                        <div className='text-danger'>{errorElement}</div>
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
                    <button onClick={() => signInWithFacebook()} className='w-100  py-2  rounded-pill login-btn text-start'>
                        <img className='logo-icon ' src={facebook} alt="" />
                        <span>Continue with Facebook</span>
                    </button>
                    <button onClick={() => signInWithGoogle()} className='w-100  py-2  rounded-pill login-btn text-start mb-5'>
                        <img className='logo-icon ' src={google} alt="" />
                        <span>Continue with Google</span>
                    </button>
                </div>


            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Register;