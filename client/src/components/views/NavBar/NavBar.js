import React, {useEffect, useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button } from 'antd';
import './Sections/Navbar.css';
import axios from 'axios';


function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };


  const onClose = () => {
    setVisible(false)
  };
 

  return (
    <nav  className="menu" style={{color: 'red' ,position: 'fixed', zIndex: 1, width: '100%',}}>  
      <div className="menu__logo">
      </div>
      <div className="menu__container">
        <Button
          className="menu__mobile-button1"
          type="primary"
          onClick={showDrawer}
        >
           Menu
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar