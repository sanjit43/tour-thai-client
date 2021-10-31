import React from 'react';

const TotalOrder = (props) => {
    const { _id, name, email, tel, address } = props.order;

    //Delete orders
    const handleDelete = id => {
        const url = `https://shielded-sierra-58431.herokuapp.com/address${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                }
            })
    }
    return (
        <div className='col-md-4 p-2'>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Email: {email}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Hello: {tel}</h6>
                    <p className="card-text">Address: {address}</p>
                    <button className='mx-2' onClick={() => handleDelete(_id)}>Delete</button>
                    <button>Update</button>
                </div>
            </div>

        </div>

    );
};

export default TotalOrder;