import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo-white.png';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();
    return (
        <div className='position-relative'>
            <Navbar className='header-nav position-absolute top-0 w-100' expand="lg">
                <Container className='mx-auto px-5 pt-5 '>
                    <Navbar.Brand as={Link} to="/" >
                        <img className='home-logo  text-white' src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" w-100 d-flex align-items-center justify-content-around">

                            <Nav.Link href="#search">
                                <input className='header-search rounded-3 text-white' type="search" defaultValue='Search your destination...' />
                            </Nav.Link>
                            <Nav.Link as={Link} to='/booking' className='nav-link text-white'>News</Nav.Link>
                            <Nav.Link as={Link} to='/details' className='text-white' href="#destination">Details</Nav.Link>

                            {user?.uid ? <div className='d-flex align-items-center'>
                                <div><img style={{ width: '60%' }} className='rounded-pill me-2' src={user?.photoURL} alt="" /></div>
                                <div className='fw-bolder text-info'> {user?.displayName}</div>
                                <button className="ms-5 nav-btn" onClick={() => signOut()}> Signout</button>
                            </div>
                                :
                                <div className='d-lg-flex justify-content-around'>
                                    <Nav.Link as={Link} to='/signup' className='nav-link text-white me-5' >Register</Nav.Link>
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

export default Header;