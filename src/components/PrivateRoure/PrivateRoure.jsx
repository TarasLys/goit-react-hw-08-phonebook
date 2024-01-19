import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from '../../redux/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoure = ({ children, redirectTo = '/login' }) => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return authenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoure;
