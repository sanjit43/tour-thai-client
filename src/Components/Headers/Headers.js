import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Headers = () => {
    return (
        <div className='d-flex justify-content-center bg-primary'>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Nav className="me-auto ">
                        <Link className='fw-bold text-white mx-3 text-decoration-none' to="/home">Home</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none' to="/services">Services</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none' to="/about">About</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none' to="/contact">Contact</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none bg-warning p-1 rounded' to='/register'>Register</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none bg-danger p-1 rounded' to='/login'>Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;