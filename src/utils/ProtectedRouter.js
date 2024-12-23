import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouter = () => {
  const auth = localStorage.getItem('token');
  if (!auth) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRouter;
