import React from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import './MetaPannel.css';

const MetaPannel = () => {
  const {currentChannel}= useSelector((state)=>  state.channelReducer);
  if(currentChannel.length != 0 && currentChannel.channelAvatar != undefined){
  return (
    <div className='Meta-pannel-wrap'>
      <ul className='Meta-pannel'>
      <li className='meta-ch-name-container'><p className='meta-channel-name'>About # {currentChannel.name}</p></li>
        <img className='meta-pannel-channel-avatar' src={currentChannel.channelAvatar}/>
        <li className='detail-txt-icn'><FontAwesomeIcon icon={faInfoCircle}/> <span className='meta-channel-detail'>{currentChannel.details}</span></li>
        <li className='creator-info'>
          <FontAwesomeIcon icon={faPen}/>
        <img className='creator-avatar' src={currentChannel.createdBy.avatar}/>
        <div><p className='creator-name'>{currentChannel.createdBy.name} <b className='owner'>owner</b></p></div>
        </li>
        </ul>

    </div>
  )
}
return "";
}

export default MetaPannel;
