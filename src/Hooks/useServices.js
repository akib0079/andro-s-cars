import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(serviceData => setServices(serviceData))
    }, []);

    return [services, setServices];
};

export default useServices;