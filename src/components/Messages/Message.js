import React, { useState } from 'react'
import { mockComponent } from 'react-dom/test-utils';
import { useSelector } from 'react-redux';
import "./Message.css";
import moment from 'moment';

const isImage = (message) => {
return message.hasOwnProperty('image') && !message.hasOwnProperty('content');
}


const Message = ({message}) => {

   const {conetent, timestamp,user, useravatar,  username } = message;
   const { currentUser } = useSelector((state)=> state.userReducer);
   const {isChannelPrivate, currentChannelID} = useSelector((state)=> state.channelReducer);
     console.log("Messages at message", message, "curent channel ID", currentChannelID)
   let ownMessage=false;
   let privatemsg = false;
   if(currentUser.uid === user.id){
  ownMessage=true;
   }
  //  if(isChannelPrivate){
  //   console.log("This channel is priveate!1 match ", currentChannelID.substr(0,28)," with ", user.id)
  //      if(currentChannelID.substr(0,28) !== user.id){
  //       console.log("CONDITIONAL MESSAGE ")
  //          privatemsg=true;
  //      }
  //  }
   const timeFromNow = timestamp => moment(timestamp).fromNow();
  return (
    <div className={ownMessage ? 'own' :'message-wrap'}>
      {privatemsg ? ''
      :
      <div className='message-with-user'>
      <img src={user.avatar}alt="user avatar" className='user-avatar-on-msg'/>
      <p>{user.name}</p>
      <div className='message-conetent'>
          <p className='timestamp'>{timeFromNow(timestamp)}</p>
          {conetent}
          {
          isImage(message) ? <img src={message.image} className="message-image"/>: ''
          }
          </div>
          </div>
      }
    </div>
  )
} 
export default Message;