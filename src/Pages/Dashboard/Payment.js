import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {

    const { id } = useParams();
    return (
        <div className='paymentPage'>
            <h3>Pay and Confirm the order</h3>
        </div>
    );
};

export default Payment;