import React from 'react';
import aboutImg from '../images/proflie.png'

const Portfolio = () => {
    return (
        <div className="portfolioSec">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 g-4">
                        <img className='img-fluid' src='https://travelmanias.netlify.app/static/media/Group%201aa.5407a4e33a18454c0a98.png' alt="" />
                    </div>
                    <div className="col-md-8 g-4">
                        <div className="aboutInner">
                            <h5 className='a_header'>Learn More About me</h5>
                            <h2 className='a_title'>Hello this is Akib Zawayed.Fullstack Web developer.</h2>
                            <h3>My skills in Web Development</h3>
                            <ul>
                                <li>Html (hyper text markup language)</li>
                                <li>CSS (cascading style sheets)</li>
                                <li>JavaScript</li>
                                <li>Node JS</li>
                                <li>Wordpress</li>
                                <li>PHP</li>
                                <li>My-SQL</li>
                            </ul>
                            <h5>Latest Projects</h5>
                            <a target="blank" href='https://travelmanias.netlify.app/'><button className='primaryBtn btn me-2'>Travel Mania</button></a>
                            <a target="blank" href='https://my-booky.netlify.app/'><button className='primaryBtn btn me-2'>MY BOOKY</button></a>
                            <a target="blank" href='https://props-digital-shop.netlify.app/'><button className='primaryBtn btn me-2'>Props Shop</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;