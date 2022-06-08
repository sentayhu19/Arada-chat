import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
        <div>
        <NavLink to="/"><h1 className='logo-aa' id="navlogo">አrada</h1></NavLink>
        <ul className='login-signup'>
            <button className='login-on-home'><NavLink to="/login"> Login</NavLink></button>
            <button className='signup-on-home-t'><NavLink to="/signup">Sign up</NavLink> </button>
        </ul>
        </div>

    </nav>
  )
}
export default Navbar;
