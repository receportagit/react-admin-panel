// src/components/Header.js
import React from 'react';
import './Header.css';
import { Button, Popover } from 'antd';
import IconRenderer from '../IconRenderer/IconRenderer';
import { Link } from 'react-router-dom';

const Header = () => {
  const content = (
    <div>
      <Link to="/profile/change-password">
        <Button type="link">Şifre Değiştir</Button>
      </Link>
      <Link to="/forgot-password">
        <Button type="link">Şifremi Unuttum</Button>
      </Link>
    </div>
  );
  return (
    <header className="header">
      <h1>Yönetim Paneli</h1>
      <div className="header-actions">
        <Popover placement="bottomRight" content={content} trigger="click">
          <IconRenderer iconName="IoMdSettings" iconSet="Io" style={{ fontSize: '24px', cursor: 'pointer' }} />
        </Popover>
      </div>
    </header>
  );
};

export default Header;
