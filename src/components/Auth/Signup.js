import React, { Component } from 'react'
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
export default class Signup extends Component {
  render() {
    return (
      <section className='main-wrap'>
        <h2 className='logo'>Arada Chat</h2>
      <form className='signup-wrap'>
        <div className='form-group'>     
           <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faUser}/></i>
        <input type="text" required placeholder='User Name'/>
        </div>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faEnvelope}/></i>
        <input type="email" required placeholder='Email Address'/>
        </div>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faKey}/></i>
        <input type="password" required placeholder='Password'/>
        </div>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faEye}/></i>
        <input type="password" required placeholder='Password Confrimation'/>
        </div>
        <button type='submit' className='submit'>Submit</button>
    </form>
    <div className='login'>
      <p>Already a user? Login</p>
    </div>
      </section>
    )
  }
}
