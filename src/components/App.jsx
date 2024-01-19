import React, { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/authSlice';
import RestictedRoute from './RestictedRoute/RestictedRoute';
import PrivateRoure from './PrivateRoure/PrivateRoure';

const HomePage = lazy(() => import('../components/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../components/ContactsPage/ContactsPage')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Is Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestictedRoute>
                <RegisterPage />
              </RestictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestictedRoute>
                <LoginPage />
              </RestictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoure>
                <ContactsPage />
              </PrivateRoure>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
