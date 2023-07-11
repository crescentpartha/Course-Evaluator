import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useCreateUserToken from '../../hooks/useCreateUserToken';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [userInfo, setUserInfo] = useState(null);
    const [token] = useCreateUserToken([gUser, userInfo]);
    const navigate = useNavigate();
    // console.log(userInfo);

    let signInError;
    if (gError) {
        signInError = <p className='text-error'><small>{gError?.message}</small></p>
    }

    if (gUser) {
        // console.log(gUser);
        navigate('/');
    }

    const handleSignInWithGoogle = () => {
        setUserInfo({ role: "student" });
        signInWithGoogle();
    }

    return (
        <div>
            <button
                onClick={() => handleSignInWithGoogle()}
                className="btn btn-accent btn-sm w-full"
            >Continue with Google</button>
            {gLoading && <span className="loading text-info loading-infinity loading-lg"></span>}
            {signInError}
            <div className="divider text-info before:bg-info after:bg-info mt-4 mb-1">OR</div>
        </div>
    );
};

export default SocialLogin;