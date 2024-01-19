import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from '../../redux/selectors';
import { Navigate } from 'react-router-dom';

const RestictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestictedRoute;
