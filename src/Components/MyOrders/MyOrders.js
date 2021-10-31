import React, { useEffect, useState } from 'react';
import TotalOrder from '../TotalOrder/TotalOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch('https://shielded-sierra-58431.herokuapp.com/address')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2 className='text-center mt-5'>Order and Details:</h2>
            <div className='row container m-5 border border-2 border-success p-5'>
                {
                    orders.map(order => <TotalOrder key={order._id} order={order}></TotalOrder>)
                }
            </div>


        </div>
    );
};

export default MyOrders;