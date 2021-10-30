import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase()
    return (
        <div className='text-center border border-2  border-danger my-5 w-50 p-3' style={{ margin: '0 auto' }} >
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className='btn btn-primary'>Login with Google</button>
            <button className='btn btn-dark mx-2'>Login with GitHub</button>
            <hr />
            <Link to='/register'>New user please Register</Link>
        </div>
    );
};

export default Login;