import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    // click handler er modde post korchi jate click krle delete hoi
    const handleDelete = id => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // client e ui theke data remove krte jei id ta delete krchi seta chara baki gulo remaining e niyechi & setServices diye services e pathano hlo , eete home page e jei Our services section chilo sekhan theke service card cle jabe
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
                console.log(data)
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>manage your services</h2>
            {services.map(service => <div key={service._id}>
                <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
            </div>)}
        </div>
    );
};

export default ManageServices;