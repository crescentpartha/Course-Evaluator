import React from 'react';
import useFindAdmin from '../../hooks/useFindAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Authentication/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useFindAdmin(user);
    const location = useLocation();

    // console.log(admin);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || admin !== "admin") {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;