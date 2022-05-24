import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='page404 d-flex align-items-center'>
            <div className="container p-5 text-center">
                <h1>404, Nothing Found</h1>
                <Link to={'/home'}>
                    <button className='AboutBtn mt-3'>
                        <box-icon name='home' type='solid' color='#fbfbfb' ></box-icon>
                        <p>Go Home</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page404;