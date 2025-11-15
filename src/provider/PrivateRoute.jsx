import React, { use } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h2 className='loading loading-bars loading-lg'></h2>
    }
    if (user && user?.email) {
        return children;
    }else{
        return <Navigate to="/login" state={location.pathname }></Navigate>
    }
};

export default PrivateRoute;