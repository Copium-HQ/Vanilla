import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './topBar.css'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

var date, time; 

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  setInterval(doDate, 1000)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <image className='icon'></image>
        <h1 className='title'>Copium</h1>
        <h1 className='time' id='timeID'> </h1>
        <h1 className='time' id='dateID'> </h1>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

function doDate() {
  var day = new Date();
  date = day.getDate() + '/' + (day.getMonth() + 1) + '/' + day.getFullYear();
  time = formatDate(day.getHours()) + ':' + formatDate(day.getMinutes()) + ':' + formatDate(day.getSeconds());

  document.getElementById("dateID").textContent="Date: " + date;
  document.getElementById("timeID").textContent="Time: " + time;
}

function formatDate(number) {
  return String(number).padStart(2, '0');
}