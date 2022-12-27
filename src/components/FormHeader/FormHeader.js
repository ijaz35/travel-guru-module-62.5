import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const FormHeader = () => {
    const navigate = useNavigate();
    return (
        <div className='position-relative'>
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

                            <Nav.Link as={Link} to='/signup' className='nav-link text-dark' >Register</Nav.Link>
                            <button onClick={() => navigate('/login')} className='nav-btn'>Login</button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default FormHeader;