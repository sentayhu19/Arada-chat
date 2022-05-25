import React from 'react'

 const  Userpannel = () => {
  return (
    <header>
        <h1 className='logo'>አrada Chat</h1>
        <select className='menu-options'>
            <option value="user">Signed as User</option>
            <option value="avatar">Change Avatar</option>
            <option value="signout">Sign Out</option>
        </select>
    </header>
  )
}
export default Userpannel;
