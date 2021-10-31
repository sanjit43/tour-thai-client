import React from 'react';

const Client = () => {
    return (
        <div className='border border-2 border-success m-5 bg-light'>
            <div className='text-center m-5'>
                <h2 className='mb-3'>SUBSCRIBE TO OUR NEWSLETTER!</h2>
                <h3 className='mb-3'>The world of Thai Tour and Travel is always evolving. Stay in touch and we'll keep you up to speed!</h3>
                <input style={{ width: '500px' }} className='mx-3 border border-2 border-primary p-2' type="email" name="" id="" placeholder='Enter your email' />
                <button className='btn btn-primary'>Subscribe</button>
            </div>


        </div>
    );
};

export default Client;