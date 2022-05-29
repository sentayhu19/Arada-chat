import React, {useState, useEffect} from 'react'
import MessageHeader from './MessageHeader';
import "./Messages.css";
import firebase from '../../firebase';
import SendMessage from './SendMessage'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Message from './Message';
import { generate } from 'randomized-string';

const Messages = () => {
  const {currentChannelID}= useSelector((state)=>  state.channelReducer);
  const [messageData, setMessageData] =  useState({
    messagesRef: firebase.database().ref("messages"),
    channel: '',
    channelMessages:'',
  });
  useEffect(()=>{
    if(currentChannelID) {
      setMessageData((e) => ({...e,
        ["channel"]: currentChannelID,
    }));  
       addListener(currentChannelID)
    }
},[currentChannelID])

  const addListener = (channelId) => {
   displayMessageListner(channelId)
  }

  const displayMessageListner = (channelID) =>{ 
let loadedMessages = [];
messageData.messagesRef.child(channelID).on('child_added', collect => {
  loadedMessages.push(collect.val());
  setMessageData((e) => ({
    ...e,
    ["channelMessages"]: loadedMessages,
  }));
} )

  }
  const {channelMessages} = messageData;
  try {
  return (
    <section className='Message-section'>
      <MessageHeader/>
      <div className='message-body'>
        {channelMessages.map((m) => (
            <Message key={generate()} message={m} />
        ))
}
      </div>
      <SendMessage messageprop={messageData}/>
    </section>
  )
}
catch(err) {
  console.log(err);
}
return "";
}
export default Messages; 