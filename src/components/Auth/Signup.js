import React, { Component } from 'react'

import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { firebase } from '../../firebase';
import md5 from 'md5';

export default class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm : '',
    passwordconfError : '',
    loading: false,
    usersRef: firebase.database().ref("users"),
  };
  handleonchange = (e) => {
this.setState({[e.target.name]: e.target.value})
  }
 
  handleSubmit = (e) =>{
    e.preventDefault();
    if(this.state.password !== this.state.confirm ){
  this.setState({passwordconfError:"Password Doesn't Match"});
      return "";
    }
    this.setState({loading:true});
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(CreatedUser => {
      if (CreatedUser.user == undefined){
        console.log('Email dup');
      }
      console.log("Message",CreatedUser.user);
      this.setState({loading:false});
      CreatedUser.user.updateProfile({
        displayName: this.state.username,
        photoURL: `http://gravatar.com/avatar/${md5(CreatedUser.user.email)}?d=identicon`})
        .then(()=>{
          this.saveUser(CreatedUser).then(() => {
            console.log("user saved");
          })
          this.setState({loading:false});
        }).catch(err => {
          console.log(err);
          this.setState({loading:false})
        })
    } )
    .catch(() => {
      this.setState({loading:false});
    })
    
  }
  saveUser = CreatedUser => {
  return this.state.usersRef.child(CreatedUser.user.uid).set({
    name: CreatedUser.user.displayName ,
    avatar: CreatedUser.user.photoURL
  })
  }
  render() {
    const {username,email,password,confirm, passwordconfError,loading} = this.state;
    return (
      <section className='main-wrap'>
        <header>
        <NavLink to="/"><h2 className='logo'>አrada Chat</h2></NavLink>
          <h4 className='logo'>Sign up</h4>
         </header>
      <form className='signup-wrap' onSubmit={this.handleSubmit}>
        <div className='form-group'>     
           <i className='signup-form-icon' >
             <FontAwesomeIcon className='icn' icon={faUser}/></i>
        <input type="text" value={username} onChange={this.handleonchange} name='username' required placeholder='UserName'/>
        </div>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faEnvelope}/></i>
        <input type="email" value={email} name='email'onChange={this.handleonchange} required placeholder='Email Address'/>
        </div>
        <div className='form-group'> 
        <i className='signup-form-icon' ><FontAwesomeIcon className='icn' icon={faLock}/></i>
        <input type="password" minLength="6" value={password} onChange={this.handleonchange} name='password' required placeholder='Password'/>
        </div>
        <div className='form-group'> 
        <i className='signup-form-icon' >
          <FontAwesomeIcon className='icn' icon={faEye}/></i>
        <input type="password" value={confirm} onChange={this.handleonchange} name='confirm' required placeholder='Password Confrimation'/>
        </div>
       <span className='psw-not-match'>
        {passwordconfError}
          </span>        
 <button type='submit' disabled={loading} id='submit' className={loading ? 'loading' : ''}>Sign up</button>
    </form>
    <div className='login'>
      <p>Already a user?<Link to="/login"> Login</Link> </p>
    </div>
      </section>
    )
  }
}
