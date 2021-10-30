import React from 'react';

const Register = () => {
    return (
        <div>
            <form className='text-center border border-2  border-danger my-5 w-50 p-3' style={{ margin: '0 auto' }} action="">
                <input className='mb-3' type="text" name="" id="" placeholder='Enter your name' />
                <br />
                <input className='mb-3' type="email" name="" id="" placeholder='Enter your email' />
                <br />
                <input className='mb-3' type="password" name="password" id="password" placeholder='Password' />
                <br />
                <input type="button" value="Register" />
            </form>
        </div>
    );
};

export default Register;