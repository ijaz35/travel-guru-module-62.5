import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo-white.png';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='position-relative'>
            <Navbar className='header-nav position-absolute top-0 w-100' expand="lg">
                <Container className='mx-auto px-5 pt-5 '>
                    <Navbar.Brand as={Link} to="/" className='' >
                        <img className='home-logo  text-white' src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" w-100 d-flex align-items-center justify-content-around">

                            <Nav.Link href="#search">
                                <input className='header-search rounded-3 text-white' type="search" defaultValue='Search your destination...' />
                            </Nav.Link>
                            <Nav.Link className='nav-link text-white' href="#news">News</Nav.Link>
                            <Nav.Link className='text-white' href="#destination">Destination</Nav.Link>
                            <Nav.Link className='nav-link text-white' href="#blogs">Blogs</Nav.Link>
                            <Nav.Link className='nav-link text-white' href="#contact">Contact</Nav.Link>
                            <button onClick={() => navigate('/login')} className='nav-btn'>Login</button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;