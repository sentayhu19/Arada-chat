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
   const { currentUser} = useSelector((state)=> state.userReducer);
   let ownMessage=false;
   if(currentUser.uid === user.id){
  ownMessage=true;
   }
   const timeFromNow = timestamp => moment(timestamp).fromNow();
  return (
    <div className={ownMessage ? 'own' :'message-wrap'}>
        <div className='message-with-user'>
        <img src={user.avatar}alt="user avatar" className='user-avatar-on-msg'/>
        <div className='message-conetent'>
            <p className='timestamp'>{timeFromNow(timestamp)}</p>
            {conetent}
            {
            isImage(message) ? <img src={message.image} className="message-image"/>: ''
            }
            </div>
            </div>
    </div>
  )
} 
export default Message;