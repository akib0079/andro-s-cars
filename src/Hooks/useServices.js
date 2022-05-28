import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://warm-dusk-57859.herokuapp.com/packages')
            .then(res => res.json())
            .then(serviceData => setServices(serviceData))
    }, []);

    return [services, setServices];
};

export default useServices;