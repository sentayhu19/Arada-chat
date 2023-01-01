import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import './Index.css';
import Footer from './Footer';
import Features from './features';
const Index = () => {
  return (
    <>
      <div className='msg feature-bg'> New features are comming...</div>
      <header>
          <Navbar/>
      </header>
      <div class="context">
      <section className='home-main'>
          <div className='main-wrap1'>
          <div className='about' data-aos="slide-left">
            <h2 className='white welcome'>
              <u>Welcome to Arada chat.</u></h2>
             <h2 className='white'>Arada is is a chatting platform that brings you closer.
              You can create a channel and talk on the channel and DM other to! </h2>
              <small class="orange">Arada is someone who is flexable ,hard worker, and who can adopt to new things.  </small>
          <button className='signup-on-home' ><NavLink to="/signup">Create an account</NavLink> </button>
          </div>
          <div className="more-info" data-aos="slide-left">
            <h1 className='logo-aa border'>አrada</h1>
             <h2 className='white'> Connect with Every one. </h2> 
          </div>
          </div>

          </section> 
          </div>
          <Features/>
<Footer/>
    </>
    
  )
}
export default Index;