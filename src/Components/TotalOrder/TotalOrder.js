import React from 'react';

const TotalOrder = (props) => {
    const { name, email, tel, address } = props.order;
    return (
        <div className='col-md-4 p-2'>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Email: {email}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Hello: {tel}</h6>
                    <p className="card-text">Address: {address}</p>
                    <button className='mx-2'>Delete</button>
                    <button>Update</button>
                </div>
            </div>

        </div>

    );
};

export default TotalOrder;