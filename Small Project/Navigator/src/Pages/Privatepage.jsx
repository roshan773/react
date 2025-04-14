import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/Authcontext';

const PrivatePage = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" />; 
    } else {
        return children; 
    }
};

export default PrivatePage;
