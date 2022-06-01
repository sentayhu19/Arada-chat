import React, { useState } from 'react'
import './Aside.css';
import Userpannel from './Userpannel';
import Channel from './Channel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Aside() {
const [hideMenu,setHideMenu] = useState("");
  const handleMenu = () => {
    setHideMenu({"hide":"Hide"})
  }
  const handleMenuShow = () => {
    setHideMenu({"hide":"Show"})
  }

  console.log("HIDE MENU val",hideMenu.hide);
  return (
    <>
      <div className='hamburger-bar-wrap'>
      <FontAwesomeIcon onClick={handleMenuShow} icon={faBars} className="menu-bars-show" />
      </div>
    <div className='menu' id={hideMenu.hide}>
     <Userpannel handleMenu={handleMenu}/>
     <Channel/>
    </div>
    </>
  )
}
