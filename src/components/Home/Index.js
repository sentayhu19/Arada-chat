import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import './Index.css';

const Index = () => {
  return (
    <>
      <div className='msg'> New features are comming...</div>
      <header>
          <Navbar/>
      </header>
      <section className='home-main'>
          <div className='main-wrap1'>
          <div className='about'>
             <p className='white'> Arada is the best Chatt web app! </p>
          <button className='signup'><NavLink to="/signup">Start Chatting Now</NavLink> </button>
          </div>
          <div className="more-info">
             <h2 className='white'> Connect with Every one  </h2> 
          </div>
          </div>

          </section> 
    </>
    
  )
}
export default Index;