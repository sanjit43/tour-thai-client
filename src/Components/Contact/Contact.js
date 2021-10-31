import React from 'react';

const Contact = () => {
    return (
        <div className='text-center border broder-2 border-primary m-5 p-5'>
            <h2>CONTACT US</h2>
            <div className='text-danger w-50' style={{ margin: '0 auto' }}><hr /></div>
            <p className='text-center'>Our team of experts can help answer any questions you might have. Please fill out the form below <br /> and a consultant will respond shortly.</p>
            <div className='text-center'>
                <form>
                    <input className='my-2' style={{ width: '300px' }} type="text" name="" id="" placeholder='Subject' />
                    <br />
                    <textarea className='my-2' style={{ width: '500px' }} name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <input className='mx-3 my-2' style={{ width: '300px' }} type="text" name="" id="" placeholder='Your Name' />
                    <input style={{ width: '300px' }} type="email" name="" id="" placeholder='Email' />
                </form>
            </div>
            <p className='mt-3'>Email:experts@asiatours.com
                <br />
                Hotline:(+84) 916 952 668</p>
        </div>
    );
};

export default Contact;