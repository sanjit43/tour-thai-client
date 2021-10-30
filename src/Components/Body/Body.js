import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Features from '../Features/Features';

const Body = () => {
    const [features, setFeatures] = useState([])

    useEffect(() => {
        fetch('https://shielded-sierra-58431.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div className='text-center my-5 container'>
            <h2 className='fst-italic text-secondary'>Highlights in our Thailand Tours</h2>
            <div className='text-danger w-50' style={{ margin: '0 auto' }}><hr /></div>
            <div className='w-50 border border-2 border-success rounded' style={{ margin: '0 auto' }}>
                <p className='p-4'>With many years of involvement in creating a tailor-made journey for our amazing customers, our experts always focus on the quality of Thailand Tours to bring the unforgettable experience and highlights of each destination to travellers.</p>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    {
                        features.slice(6, 10).map(feature => <Features key={feature.key} feature={feature}></Features>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Body;