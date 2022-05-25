import React from 'react'
import firebase from '../../firebase';
import { loadingan } from '../../redux/arada/action/action';
import { useDispatch, useSelector } from 'react-redux';
 const  Userpannel = () => {
    const dispatch = useDispatch();
    const { currentUser, loading } = useSelector((state)=> state.userReducer);
    console.log("AT DASH", currentUser);
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
        <h1 className='logo'>አrada Chat</h1>
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
