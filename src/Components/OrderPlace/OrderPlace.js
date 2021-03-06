import React, { useRef } from 'react';

const OrderPlace = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const telePhoneRef = useRef()
    const addressRef = useRef()

    const handleOrder = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const telephone = telePhoneRef.current.value;
        const address = addressRef.current.value;
        const newUser = { name: name, email: email, tel: telephone, address: address };
        //send data to the server
        fetch('https://shielded-sierra-58431.herokuapp.com/address', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('sucessfully added user')
                    e.target.reset()
                }
            })
        e.preventDefault()
    }
    return (
        <div className='text-center border border-2  border-danger my-5 w-50 p-3' style={{ margin: '0 auto' }} >
            <h2>Enput your address Here: </h2>
            <form onSubmit={handleOrder}>
                <input ref={nameRef} className='mb-3' type="text" name="" id="" placeholder='Your full name' required />
                <br />
                <input ref={emailRef} className='mb-3' type="email" name="" id="" placeholder='Email' required />
                <br />
                <input ref={telePhoneRef} className='mb-3' type="tel" name="" id="" placeholder='Phone' required />
                <br />
                <input ref={addressRef} className='mb-3' type="text" name="" id="" placeholder='Your address' required />
                <br />
                <input className='mb-3' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default OrderPlace;