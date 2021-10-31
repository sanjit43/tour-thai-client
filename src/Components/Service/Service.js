import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, name, Description, image, Price } = props.service;

    const url = `/services/${_id}`
    return (
        <div className='col-md-4 text-center'>
            <div className="card-group my-3">
                <div className="card">
                    <img src={image} className="card-img-top p-2" style={{ height: '400px' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{Description}</p>
                    </div>
                    <h3>${Price}</h3>
                    <div className="card-footer">
                        <Link to={url}><button className='btn btn-primary'>Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;