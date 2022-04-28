import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../../hooks/useService';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service, setService] = useService(serviceId);
    return (
        <div>
            <img src={service.img} alt="" />
            <h2>Please Checkout your booking:${service.name}</h2>
        </div>
    );
};

export default Checkout;