import React from 'react';
import { Container, Content } from './Sidebar.js';
import SidebarItem from '../SidebarItem/SidebarItem.jsx';
import { FaTimes, FaHome, } from 'react-icons/fa'
import { BsFillQuestionSquareFill } from "react-icons/bs";

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
          <a href={"/"}>
            <SidebarItem Icon={FaHome} Text="Home"/>
          </a>
          <a href={"/Curiosidades"}>
            <SidebarItem Icon={BsFillQuestionSquareFill} Text="Curiosidades"/>
          </a>
      </Content>
    </Container>
  )
}

export default Sidebar;