import React, { Component } from 'react'
import './Signup.css';
export default class Signup extends Component {
  render() {
    return (
      <section className='main-wrap'>
        <h2 className='logo'>Arada Chat</h2>
      <form className='signup-wrap'>
        <input type="text" required placeholder='User Name'/>
        <input type="email" required placeholder='Email Address'/>
        <input type="password" required placeholder='Password'/>
        <input type="password" required placeholder='Password Confrimation'/>
        <button type='submit' className='submit'>Submit</button>
    </form>
    <div className='login'>
      <p>Already a user? Login</p>
    </div>
      </section>
    )
  }
}
