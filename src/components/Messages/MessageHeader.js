import React from 'react'
import './MessageHeader.css';

const MessageHeader = ({channelName,Members,handleSearchChange}) => {
  console.log("SHOW no CHANNEL USERS", Members);
  return (
    <div className='message-header'>
        <div className='channel-info'>
    <h2># {channelName}</h2> 
    <h4>{Members}</h4>
    </div>
    <div className='search'>
        <input type="text" onChange={handleSearchChange} placeholder='Search Message'/>
    </div>
    </div>
  )
}

export default  MessageHeader;
