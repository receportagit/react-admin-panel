import React from 'react';
import { Link } from 'react-router-dom';

const SubMenuItem = ({ items }) => {
  return (
    <ul class="sub-menu">
      {items.map((item) => {
        return (
          <li>
            <Link to={{ pathname: `${item.link}` }}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenuItem;
