import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormHeader from '../FormHeader/FormHeader';
import facebook from '../../../src/images/icons/fb.png';
import google from '../../../src/images/icons/google.png';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    //google signIn
    const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);

    //Facebook signin
    const [signInWithFacebook, user2, loading2, error3] = useSignInWithFacebook(auth);

    let errorElement;

    if (loading || sending || loading1 || loading2) {
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
        /* console.log(user)
        console.log(user1)
        console.log(user2) */
        navigate(from, { replace: true });
    }

    const handleLoginFormSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password reset email sent')
        } else {
            alert('Enter your mail address')
        }
    }

    return (
        <div className='w-100 position-relative'>
            <FormHeader></FormHeader>
            <div className="login-form-container ">
                <div className='login-form-inner w-100'>
                    <h2 className='w-75 mx-auto fw-bold'>Login</h2>

                    <form onSubmit={handleLoginFormSubmit} className='w-75 mx-auto '>
                        <input ref={emailRef} className='my-4' type="text" name="email" id="email" placeholder='User name or Email ' />
                        <input className='my-4' type="password" name="password" id="password" placeholder='Password' />
                        <div className="d-flex justify-content-between my-5">
                            <div>
                                <input type="checkbox" name="checkbox" id="" />
                                <span className="ms-2"><small>Remember Me</small></span>
                            </div>
                            <Link onClick={resetPassword} style={{ color: 'rgba(249, 165, 26, 1)' }}>Forgot Password</Link>
                        </div>
                        <div className='text-danger mb-3'>{errorElement}</div>
                        <input type="submit" className='d-block booking-btn w-100' value='Login' />

                    </form>
                    <div className='d-flex w-75 mt-4 mx-auto'>
                        <p className='me-2'>Don't have an account?</p>
                        <Link to='/signup' style={{ color: 'rgba(249, 165, 26, 1)' }}>Create an account</Link>
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

export default Login;