import React, {useState} from 'react'
import MessageHeader from './MessageHeader';
import "./Messages.css";
import firebase from '../../firebase';
import SendMessage from './SendMessage'

export default function Messages() {
  const [messageData, setMessageData] =  useState({
    messagesRef: firebase.database().ref("messages"),
  });

  // const {messagesRef} = message;
  console.log("REF at MESSAGE to be passed: ",messageData.messagesRef)
  return (
    <section className='Message-section'>
      <MessageHeader/>
      <div className='message-body'>
        
      </div>
      <SendMessage messageprop={messageData}/>
    </section>
  )
}
