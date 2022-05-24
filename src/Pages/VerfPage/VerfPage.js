import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import verifyImg from '../../images/Envelope.gif';

const VerfPage = () => {
    const [user] = useAuthState(auth);
    const nav = useNavigate();

    if (user?.emailVerified) {
        nav('/home');
    }
    return (
        <div className='page404 d-flex align-items-center'>
            <div className="container p-2 text-center">
                <img className='img-fluid w-25' src={verifyImg} alt="" />
                <h3>Please Check your mail and Verify your mail.</h3>
                <h4>Didn't recive the mail?"Check Spam"</h4>
                <a href='/home'>
                    <button className='AboutBtn mt-3'>
                        <box-icon name='home' type='solid' color='#fbfbfb' ></box-icon>
                        After verification, Go Home
                    </button>
                </a>
            </div>
        </div>
    );
};

export default VerfPage;