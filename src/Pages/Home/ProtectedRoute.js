import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from './Loading';

const ProtectedRoute = ({ children }) => {
  const [user,loading] = useAuthState(auth)
  let location = useLocation();
  if(loading){
    return <Loading/>
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children;
};

export default ProtectedRoute;