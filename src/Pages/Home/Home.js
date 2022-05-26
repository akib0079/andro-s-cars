import React from 'react';
import './Home.css';
import '../GlobalCss/grobal.css'
import HeroSec from './HeroSec';
import AboutSec from './AboutSec';
import SummarySec from './SummarySec';
import Partners from './Partners';
import Tools from './Tools';


const Home = () => {
    return (
        <div className="homePage">
            <HeroSec></HeroSec>
            <AboutSec></AboutSec>
            <Tools></Tools>
            <SummarySec></SummarySec>
            <Partners></Partners>
        </div >
    );
};

export default Home;