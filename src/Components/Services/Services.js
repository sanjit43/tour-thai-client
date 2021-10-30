import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shielded-sierra-58431.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center my-5'>
                <h2>THE BEST THAILAND TOURS COLLECTION 2021 - 2022</h2>
                <div className='text-danger w-50' style={{ margin: '0 auto' }}><hr /></div>
                <p className='w-50' style={{ margin: '0 auto' }}>If you're in need of inspiration for your dream holiday in Thailand, then look no further. Take a look at a wide range of our travellers' favourite holiday packages. These Thailand Tours have been meticulously designed by our experts to bring you the authentic local experiences of this stunning country. Discover our range of traveller top picks and book your desired holiday today.</p>
            </div>

            <div className='container'>
                <div className='row'>
                    {
                        services.slice(0, 6).map(service => <Service key={service.key} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;