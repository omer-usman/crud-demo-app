import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Component }) => {
  const userRole = useSelector(state => state.userRole);

  return userRole === 'admin' ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;