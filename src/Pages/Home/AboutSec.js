import React from 'react';

const AboutSec = () => {
    return (
        <section className="aboutSec">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span className="badge primaryBdg mb-3">Learn More</span>
                        <h2 className='fw-bolder'>ABOUT ANDRO-CARS</h2>
                        <p>Here you can order car parts, as your needs. Limited time offer for
                            only new customer also get free shipping on orders. Andro cars provides lifetime warrenty for every products. You can find the details from the privacy policy page.</p>
                        <div className="d-flex icns">
                            <div className="icnAbout">
                                <i className='bx bxs-car-mechanic'></i>
                            </div>
                            <div className="icnAbout">
                                <i className='bx bx-sitemap' ></i>
                            </div>
                            <div className="icnAbout">
                                <i className='bx bxs-car-mechanic' ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AboutSec;