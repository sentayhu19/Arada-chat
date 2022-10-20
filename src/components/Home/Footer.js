import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div>
        <h1 className='logo-aa border onfooter'>አrada</h1>
        <hr/>
        <p className='white built-by white footer-info'>Built by <Link to="https://github.com/sentayhu19"> Sentayhu Berhanu</Link></p>
        <p className='footer-info white'>Arada Chat &copy;2022 All Rights Reserved</p>
        <br/>
        </div>
        </footer>
  )
}
export default Footer;
