import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'

const Headers = () => {
    const { user, logOut } = useAuth();

    return (
        <div className='d-flex justify-content-center bg-primary'>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand href="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <div className="me-auto ">
                        <Link className='fw-bold text-white mx-3 text-decoration-none' to="/home">Home</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none' to="/services">Services</Link>
                        {user?.email && <Link className='fw-bold text-white mx-3 text-decoration-none' to="/orders">My Orders</Link>}
                        <Link className='fw-bold text-white mx-3 text-decoration-none' to="/about">About</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none' to="/contact">Contact</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none bg-warning p-1 rounded' to='/register'>Register</Link>
                        <Link className='fw-bold text-white mx-3 text-decoration-none bg-danger p-1 rounded' to='/login'>Login</Link>
                        <span className='text-warning'>{user.displayName}</span>
                        {user?.email && <button onClick={logOut} className='fw-bold text-white mx-3 text-decoration-none bg-dark p-1 rounded'>Log Out</button>}
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;