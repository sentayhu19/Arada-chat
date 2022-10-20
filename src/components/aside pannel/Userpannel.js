import React, {Dispatch} from 'react'
import { firebase } from '../../firebase';
import { loadingan } from '../../redux/arada/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { clearMenu } from '../../redux/arada/action/action';
 const  Userpannel = ({stateid}) => {
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
     const handleOnClick = () => {
    
      dispatch(clearMenu(false));
    }
  return (
    <header>
      <div className='logo-and-menu-wrap'>
        <h1 className='logo'>አrada Chat</h1>
        <FontAwesomeIcon  icon={faClose} onClick={handleOnClick} className="menu-bars" />
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
