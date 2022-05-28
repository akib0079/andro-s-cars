import React, { useEffect, useState } from 'react';
import './Home.css';
import '../GlobalCss/grobal.css'
import HeroSec from './HeroSec';
import AboutSec from './AboutSec';
import SummarySec from './SummarySec';
import Partners from './Partners';
import Tools from './Tools';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Review from './Review';


const Home = () => {

    const [tools, setTools] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://warm-dusk-57859.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    if (tools.length === 0) return (
        <div className="spinnerDiv">
            <Spinner className='spinner' animation="grow" />
        </div>
    );

    return (
        <div className="homePage">
            <HeroSec></HeroSec>
            <AboutSec></AboutSec>

            {/* Tools section */}
            < section className="Tools" >
                <div className="container">
                    <h2 className='text-center mb-5 brandsHeader'>Available Tools</h2>

                    <div className="row row-cols-1 row-cols-md-4 g-0">
                        {
                            tools.slice(0).reverse().map(tool => <Tools key={tool._id} info={tool}></Tools>)
                        }
                    </div>

                </div>
            </section >

            <SummarySec></SummarySec>

            {/* Reviews section */}
            < section className="reviewsSec" >
                <div className="container">
                    <h2 className='text-center mb-5 brandsHeader'>Reviews From Clients</h2>

                    <div className="reviews text-center">
                        {
                            reviews.map(review => <Review key={review._id} info={review}></Review>)
                        }
                    </div>

                </div>
            </section >

            <Partners></Partners>
        </div >
    );
};

export default Home;