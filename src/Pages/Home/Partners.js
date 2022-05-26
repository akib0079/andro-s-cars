import React from 'react';
import brand1 from '../../images/1.jpg'
import brand2 from '../../images/2.jpg'
import brand3 from '../../images/3.jpg'
import brand4 from '../../images/4.jpg'
import brand5 from '../../images/5.jpg'
import brand6 from '../../images/6.jpg'
const Partners = () => {
    return (
        <section section className='brands' >
            <div className="container">
                <h2 className='text-center mb-5 brandsHeader'>Our Partners</h2>
                <div className="row">
                    <img className='bImg col' src={brand1} alt="brandImg" />
                    <img className='bImg col' src={brand2} alt="brandImg" />
                    <img className='bImg col' src={brand3} alt="brandImg" />
                    <img className='bImg col' src={brand4} alt="brandImg" />
                    <img className='bImg col' src={brand5} alt="brandImg" />
                    <img className='bImg col' src={brand6} alt="brandImg" />
                </div>
            </div>
        </section >
    );
};

export default Partners;