import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
        <div>
        <p>LOGO</p>
        <ul className='login-signup'>
            <button className='login'><NavLink to="/login"> Login</NavLink></button>
            <button className='signup'><NavLink to="/signup">Sign up</NavLink> </button>
        </ul>
        </div>

    </nav>
  )
}
export default Navbar;
