import $ from 'jquery';
import React, { useEffect } from 'react';
import { Logo, profile } from '../../assets';
import { sidebarMenu } from '../../constant/sidebarMenu';
import MenuItem from '../MenuItem/Menuıtem';
import './Sidebar.css';
import { TbLogout } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    $(document).ready(function () {
      $('.sub-menu').hide();
      $('.checkbox1').click(function () {
        if ($('.sidebar')[0].className !== 'sidebar') {
          $('.sidebar').removeClass('open');
        } else {
          $('.sidebar').addClass('open');
          $('.sub-menu').slideUp();
          $('.arrow').removeClass('rotate');
        }
      });
      $('.sub-btn').click(function () {
        $('.title.active').removeClass('active');
        $(this).find('.title').addClass('active');
        if ($(this)[0].children.length !== 2) {
          $('.arrow').removeClass('rotate');
        }
        if ($('.sidebar')[0].className !== 'sidebar open') {
          $('.sub-menu').not($(this).next('.sub-menu').slideToggle()).slideUp();
          $(this).find('.arrow').toggleClass('rotate');
        }
      });
    });
  }, []);

  return (
    <aside class="sidebar">
      <div class="sidebar-master">
        <div class="sidebar-header">
          <h2 class="logo">
            <img width="45" height="45" src={Logo} alt="image_not_found" />
            <span>KODDİV</span>
          </h2>
          <input type="checkbox" id="checkbox1" class="checkbox1 visuallyHidden" />
          <label for="checkbox1">
            <div class="hamburger hamburger1">
              <span class="bar bar1"></span>
              <span class="bar bar2"></span>
              <span class="bar bar3"></span>
              <span class="bar bar4"></span>
            </div>
          </label>
        </div>
        <hr />
        <nav class="sidebar-nav">
          <MenuItem sidebarMenu={sidebarMenu} />
        </nav>
      </div>
      <div class="sidebar-footer">
        <li>
          <div class="profile-details">
            <div class="name-job">
              <div class="profile-content">
                <img width="50" src={profile} alt="" />
                <div class="user-text">
                  <div class="profile_name">Recep Orta</div>
                  <div class="job">Full Stack Developer</div>
                </div>
              </div>
              <span onClick={() => navigate('/logout')}>
                <TbLogout size={24} cursor="pointer" />
              </span>
            </div>
          </div>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
