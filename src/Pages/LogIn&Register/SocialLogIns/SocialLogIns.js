import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogIn.css';

const SocialLogIns = () => {

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);


    // Redirecting to past page after logIn
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    if (userGoogle || userFacebook) {
        navigate(from, { replace: true });
    }

    return (
        <div className='socialLogIns'>
            <p className='text-danger m-0'>{errorGoogle?.message.slice(9)}</p>
            {
                loadingGoogle ?
                    <p className='text-success m-0'>Waiting for your access...</p>
                    :
                    <p className='text-success m-0'></p>
            }
            {/* Google SignIn */}
            <button onClick={() => signInWithGoogle()} className='socialLogBtn'><box-icon name='google' type='logo' color='#fdfdfd' ></box-icon></button>
            {/* Facebook SignIn */}
            <button onClick={() => signInWithFacebook()} className='socialLogBtn'><box-icon name='facebook' type='logo' color='#fdfdfd' ></box-icon></button>
        </div>
    );
};

export default SocialLogIns;