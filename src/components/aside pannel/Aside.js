import React, { useState } from 'react'
import './Aside.css';
import Userpannel from './Userpannel';
import Channel from './Channel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setMenu } from '../../redux/arada/action/action';
import { Link } from 'react-router-dom';

export default function Aside() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.menuReducer);
  const handleOnClick = () => {
    
    dispatch(setMenu(true));
  }
// const [hideMenu,setHideMenu] = useState("");
const [stateid,setStateid] =  useState(null);
  // const handleMenu = (currentChannelID) => {
  //   setStateid(currentChannelID);
  //   setHideMenu({"hide":"Hide"});
  // }
  // const handleMenuShow = () => {
  //   setHideMenu({"hide":"Show"});
  // }
  
  return (
    <>
      <div className='hamburger-bar-wrap'>
      <FontAwesomeIcon onClick={handleOnClick} icon={faBars} className="menu-bars-show" />
      </div>
    <div className='menu' id={isMenuOpen ? 'Show': 'Hide'}>
     <Userpannel stateid={stateid}/>
     <Channel stateid={stateid} />
     <footer>
     <p className='white built-by aside-footer'>Built by <Link to="https://github.com/sentayhu19"> Sentayhu Berhanu</Link></p>
        <p className='footer-info white'>Arada Chat &copy;2022 All Rights Reserved</p>
        </footer>
    </div>        
    </>
  )
}
