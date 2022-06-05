import React from 'react'
import firebase from '../../firebase';
import { loadingan } from '../../redux/arada/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

 const  Userpannel = ({handleMenu,stateid}) => {
    const dispatch = useDispatch();
    const {currentChannelID}= useSelector((state)=>  state.channelReducer);
    const { currentUser, loading } = useSelector((state)=> state.userReducer);
     const handleSignout = (e) =>{
if(e.target.value === "signout"){
    dispatch(loadingan())
    firebase
    .auth()
    .signOut()
    .then(signed => {
    })
}
     }
  return (
    <header>
      <div className='logo-and-menu-wrap'>
        <h1 className='logo'>አrada Chat</h1>
        <FontAwesomeIcon onClick={(e) =>handleMenu(currentChannelID)} icon={faBars} className="menu-bars" />
        </div>
        <div className='user-action'>
        <img src={currentUser.photoURL} alt="User-Avatar"className='avatar' />
        <select className='menu-options' onChange={handleSignout}>
            <option  value="user">{currentUser.displayName}</option>
            <option value="avatar">Change Avatar</option>
            <option value="signout">Sign Out</option>
        </select>
        </div>
    </header>
  )
}
export default Userpannel;
