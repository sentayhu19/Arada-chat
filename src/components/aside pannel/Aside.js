import React, { useState } from 'react'
import './Aside.css';
import Userpannel from './Userpannel';
import Channel from './Channel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Aside() {
const [hideMenu,setHideMenu] = useState("");
const [stateid,setStateid] =  useState(null);
  const handleMenu = (currentChannelID) => {
    setStateid(currentChannelID);
    setHideMenu({"hide":"Hide"});
    return;
  }
  const handleMenuShow = () => {
    setHideMenu({"hide":"Show"});
    return;
  }
  return (
    <>
      <div className='hamburger-bar-wrap'>
      <FontAwesomeIcon onClick={handleMenuShow} icon={faBars} className="menu-bars-show" />
      </div>
    <div className='menu' id={hideMenu.hide}>
     <Userpannel handleMenu={handleMenu} stateid={stateid}/>
     <Channel handleMenu={handleMenu} stateid={stateid} />
    </div>
    </>
  )
}
