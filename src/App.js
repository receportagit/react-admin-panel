import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Header, Sidebar } from './components';
import ProtectedRouter from './utils/ProtectedRouter';
import { ForgotPassword, Login, Logout, Register } from './views';

function App() {
  const location = useLocation();

  //! Sadece belirli sayfalarda Sidebar'ı saklamak için şartlı render
  const hideSidebarRoutes = ['/login', '/register', '/forgot-password'];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideSidebar && <Sidebar />}
      <div className="content">
        {!shouldHideSidebar && <Header />}
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<div>home</div>} />
            <Route path="/profile" element={<div>profile</div>} />
            <Route path="/settings" element={<div>settings</div>} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
