import React from 'react'
import './MessageHeader.css';

const MessageHeader = ({channelName,avatar,Members,handleSearchChange}) => {
  return (
    <div className='message-header'>
        <div className='channel-info'>
          <div className='channel-flex'>
          <img src={avatar} alt="channel-avatar" className="channel-avatar"/>
    <h2> {channelName}</h2> 
    </div>
    <h4>{Members}</h4>
    </div>
    <div className='search'>
        <input type="text" onChange={handleSearchChange} placeholder='Search Message'/>
    </div>
    </div>
  )
}

export default  MessageHeader;
