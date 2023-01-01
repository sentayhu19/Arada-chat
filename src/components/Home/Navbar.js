import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav>
        <div className='mob-nav-1'>
        <NavLink to="/">
          <h1 className='logo-aa' id="navlogo">
            አrada</h1>
          </NavLink>
          <div className='login-signup'>
            <button className='login-on-home' id='login-d'><NavLink to="/login"> Sign in</NavLink></button>
            <button className='signup-on-home-t' id='login-d' ><NavLink to="/signup" id='signup'>Sign up</NavLink> </button>
        </div>
         
        {click  ? 
        <div className='mobile-nav-wraper'>
          <div className='mobile-nav'>
            <div className='nav-flex'>
            <h1 className='nav-logo'>አrada</h1>
          <div onClick={handleClick}>
           <FontAwesomeIcon icon={faXmark} />
           </div>
           </div>
           <div className='mob-nav-btn'>
        <button className='login-on-home' id='login-nav'>
          <NavLink to="/login"> Sign in</NavLink>
          </button>
        <button className='signup-on-home-t' id='login-nav' ><NavLink to="/signup" id='signup'>
          Sign up</NavLink> 
          </button>
          </div>
        </div>
  </div>
        
         :
         <div className='mobile-menu-humburger' onClick={handleClick} >
         <FontAwesomeIcon icon={faBars} />
         </div>
          }
       
        
       
        </div>
      
    </nav>
  )
}
export default Navbar;
