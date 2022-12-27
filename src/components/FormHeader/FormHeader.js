import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const FormHeader = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();
    return (
        <div className='position-relative mt-4'>
            <Navbar className='header-nav position-absolute top-0 w-100 text-dark' expand="lg">
                <Container className='mx-auto px-5 pt-3 '>
                    <Navbar.Brand as={Link} to='/'>
                        <img className='home-logo  text-white' src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className=" w-50 d-flex align-items-center justify-content-between ms-auto">

                            <Nav.Link as={Link} to='/booking' className='nav-link text-dark' href="#news">News</Nav.Link>
                            <Nav.Link as={Link} to='/details' className='text-dark' >Details</Nav.Link>

                            {user?.uid ? <div className='d-flex align-items-center'>
                                <span><img style={{ width: '60%' }} className='rounded-pill me-0' src={user?.photoURL} alt="" /></span>
                                <span className='fw-bolder text-danger'> {user?.displayName}</span>
                                <button className="ms-5 nav-btn" onClick={() => signOut()}> Signout</button>
                            </div>
                                :
                                <div className='d-lg-flex justify-content-around'>
                                    <Nav.Link as={Link} to='/signup' className='nav-link text-dark me-5' >Register</Nav.Link>
                                    <button onClick={() => navigate('/login')} className='nav-btn ms-4'>Login</button>
                                </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default FormHeader;