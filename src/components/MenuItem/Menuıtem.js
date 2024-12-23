import React from 'react';
import SubMenuItem from '../SubMenuItem/SubMenuItem';
import { Link } from 'react-router-dom';
import IconRenderer from '../IconRenderer/IconRenderer';

const MenuItem = ({ sidebarMenu }) => {
  return (
    <ul className="nav-links">
      {sidebarMenu.map((menu) => {
        const isSubMenu = menu.subMenu.length > 0 ? true : false;

        return (
          <li>
            <div className="iocn-link sub-btn">
              {!isSubMenu && (
                <Link to={{ pathname: `${menu.link}` }}>
                  {<IconRenderer iconName={menu.icon.name} iconSet={menu.icon.iconSet} />}
                  <span className="link_name">{menu.name}</span>
                </Link>
              )}
              {isSubMenu && (
                <a style={{ cursor: 'pointer' }}>
                  {<IconRenderer iconName={menu.icon.name} iconSet={menu.icon.iconSet} />}
                  <span className="link_name">{menu.name}</span>
                </a>
              )}
              {menu.subMenu.length > 0 && <IconRenderer iconName="IoIosArrowForward" iconSet="Io" className="arrow" />}
            </div>
            {menu.subMenu.length > 0 && <SubMenuItem items={menu.subMenu} />}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItem;
