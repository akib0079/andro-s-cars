import React, { useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIns from '../SocialLogIns/SocialLogIns';
import './Login.css';

const LogIn = () => {

    const [c_errors, setC_errors] = useState('');

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, errorPassReset] = useSendPasswordResetEmail(
        auth
    );


    const handleLogIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (user || user?.emailVerified) {
        navigate(from, { replace: true });
    }

    const navigateRegister = (e) => {
        navigate('/register')
    }

    const resetPassword = async (e) => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Fill up email address')
        }
        await sendPasswordResetEmail(email);
    }


    return (
        <div className='logInPage'>
            <div className="logInInner">
                <div className="container-fluid g-0">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-md-5">
                        </div>
                        <div className="col-md-7">
                            <div className="loginInner">
                                <h4 className='a_header'>Welcome to andro-cars</h4>
                                <h2 className='a_title'>LogIn Here</h2>
                                <h2 className='a_title'>{c_errors}</h2>
                                <Form onSubmit={handleLogIn} className='mt-4'>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control ref={emailRef} required type="email" placeholder="Enter your Email Address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control ref={passwordRef} required type="password" placeholder="Enter your password" />
                                        </Form.Group>
                                    </Row>
                                    <p className='text-danger m-0'>{error?.message.slice(16)}</p>
                                    <p className='text-danger m-0'>{c_errors}</p>
                                    {
                                        loading ?
                                            <p className='text-success m-0'>Successful Login, Please Wait...</p>
                                            :
                                            <p className='text-success m-0'></p>
                                    }
                                    {
                                        sending ?
                                            <p className='text-success m-0'>Sending Email...</p>
                                            :
                                            <p className='text-success m-0'></p>
                                    }
                                    {
                                        errorPassReset ?
                                            <p className='text-danger m-0'>{errorPassReset.message}</p>
                                            :
                                            <p className='text-success m-0'></p>
                                    }
                                    <button className='LogInBtn mt-1' type='submit'>LogIn as Customer</button>
                                    <p className='registerP mb-1'>New to andro-cars?
                                        <span onClick={navigateRegister}> Register Here.</span> or
                                        <span className='resetPass' onClick={resetPassword}> Reset Password?</span>
                                    </p>
                                </Form>
                                <div className="socials m-0">
                                    <hr></hr>
                                    <p className='mb-1 p_socials'>Or Continue With Socials</p>
                                    <SocialLogIns></SocialLogIns>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;