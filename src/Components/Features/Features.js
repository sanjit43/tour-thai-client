import React from 'react';

const Features = (props) => {
    const { name, Description, image } = props.feature;
    return (
        <div className='col-md-3'>
            <div className="card-group">
                <div className="card p-3">
                    <img src={image} style={{ height: '200px', borderRadius: '50%' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{Description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;