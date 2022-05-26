import React from 'react'
import './MessageHeader.css';

const MessageHeader = () => {
  return (
    <div className='message-header'>
        <div className='channel-info'>
    <h2>Channel</h2> 
    <h4>3 USERS</h4>
    </div>
    <div className='search'>
        <input type="text" placeholder='Search Message'/>
    </div>
    </div>
  )
}

export default  MessageHeader;
