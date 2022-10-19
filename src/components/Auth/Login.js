import React, { Component } from 'react'
import { useState } from 'react';
import { UserAuth } from './AuthContext';
import {GoogleButton} from 'react-google-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import { firebase } from '../../firebase';
import { NavLink } from 'react-router-dom';
import { async } from '@firebase/util';

const Login = () => {
  const [login, setLogin] = useState({email: '',password: '',error : '',loading: false});
  const {googleSignIn} = UserAuth();
  const handleGooglSignIn =  async () => {
    try {
      await googleSignIn();
    }
    catch(err){
      console.log(err);
    }
  }
  const handleonchange = (e) => {
    setLogin({...login,[e.target.name]: e.target.value})
      }
  const handleSubmit= e =>{
   e.preventDefault();
   setLogin({...login, loading:true});
   firebase
   .auth()
   .signInWithEmailAndPassword(login.email,login.password)
   .then(signedUser =>{
   })
   .catch(err =>{
setLogin({...login,
  error: setLogin.error= err,
  loading:false,
})
   })
  
  }
  const {email,password, passwordconfError,loading} = login;
    return (
      <section className='main-wrap'>
        <header>
          <NavLink to="/"><h2 className='logo'> አrada Chat</h2></NavLink>
          <h4 className='logo'>Login</h4>
         </header>
      <form className='signup-wrap' onSubmit={handleSubmit}>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faEnvelope}/></i>
        <input type="email" value={email} name='email'onChange={handleonchange} required placeholder='Email Address'/>
        </div>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faLock}/></i>
        <input type="password" minLength="6" value={password} onChange={handleonchange} name='password' required placeholder='Password'/>
        </div>
       <span className='psw-not-match'>
        {login.error}
          </span>        
 <button type='submit' disabled={loading} id='submit' className={loading ? 'loading' : ''}>Login</button>
    </form>
    <div>
      <GoogleButton className='google-sign' onClick={handleGooglSignIn} />
    </div>
    <div className='login'>
      <p>Dont have an account?<Link to="/signup"> Sign Up</Link> </p>
    </div>
      </section>
    )
  
}
export default Login;