import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams()
    const [serviceDetail, setServiceDetail] = useState({})


    useEffect(() => {
        const url = `https://shielded-sierra-58431.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [])
    return (
        <div className='text-center border border-2 border-danger m-5'>
            <div className='p-3'>
                <img style={{ width: '300px' }} src={serviceDetail.image} alt="" />
                <h2>{serviceDetail.name}</h2>
                <p>{serviceDetail.Description}</p>
                <Link to='/service/order'><button className='btn btn-primary'>Place Your Order</button></Link>
            </div>
        </div>
    );
};

export default Details;