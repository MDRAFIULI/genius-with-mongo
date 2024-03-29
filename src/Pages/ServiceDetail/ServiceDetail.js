import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useService(serviceId);
    /* const [service, setService] = useState({});
    const url = `http://localhost:5000/service/${serviceId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []) */

    return (
        <div>
            <h2>Welcome to detail: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;