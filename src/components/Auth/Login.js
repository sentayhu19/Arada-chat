import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    passwordconfError : '',
    loading: false,
  };
  handleonchange = (e) => {
    this.setState({[e.target.name]: e.target.value})
      }
  handleSubmit= e =>{
   e.preventDefault();
  
  }
  render() {
    const {email,password, passwordconfError,loading} = this.state;
    return (
      <section className='main-wrap'>
        <header>
          <h2 className='logo'>Arada Chat</h2>
          <h4 className='logo'>Login</h4>
         </header>
      <form className='signup-wrap' onSubmit={this.handleSubmit}>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faEnvelope}/></i>
        <input type="email" value={email} name='email'onChange={this.handleonchange} required placeholder='Email Address'/>
        </div>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faLock}/></i>
        <input type="password" minLength="6" value={password} onChange={this.handleonchange} name='password' required placeholder='Password'/>
        </div>
       <span className='psw-not-match'>
        {passwordconfError}
          </span>        
 <button type='submit' disabled={loading} id='submit' className={loading ? 'loading' : ''}>Login</button>
    </form>
    <div className='login'>
      <p>Dont have an account?<Link to="/signup"> Sign Up</Link> </p>
    </div>
      </section>
    )
  }
}
