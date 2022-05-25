import React from 'react'
import firebase from '../../firebase';

 const  Userpannel = () => {
     const handleSignout = (e) =>{
if(e.target.value="signout"){
    console.log(e.target.value);
    firebase
    .auth()
    .signOut()
    .then(signed =>{
    })
}
     }
  return (
    <header>
        <h1 className='logo'>አrada Chat</h1>
        <select className='menu-options' onChange={handleSignout}>
            <option value="user">Signed as User</option>
            <option value="avatar">Change Avatar</option>
            <option value="signout">Sign Out</option>
        </select>
    </header>
  )
}
export default Userpannel;
