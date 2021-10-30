import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/'

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    };
    return (
        <div className='text-center border border-2  border-danger my-5 w-50 p-3' style={{ margin: '0 auto' }} >
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogIn} className='btn btn-primary'>Login with Google</button>
            <button className='btn btn-dark mx-2'>Login with GitHub</button>
            <hr />
            <Link to='/register'>New user please Register</Link>
        </div>
    );
};

export default Login;