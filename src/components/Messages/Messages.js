import React, {useState, useEffect, useRef} from 'react'
import MessageHeader from './MessageHeader';
import "./Messages.css";
import { firebase } from '../../firebase';
import SendMessage from './SendMessage'
import { useSelector,useDispatch } from 'react-redux';
import Message from './Message';
import { generate } from 'randomized-string';

const Messages = () => {
  const dispatch = useDispatch();
  const bottomRef = useRef(null);
  const {currentChannelID,currentChannel,isChannelPrivate}= useSelector((state)=>  state.channelReducer);
  console.log("IS CHANNEL PRIVA AT messages ***** ",isChannelPrivate)
  const [messageData, setMessageData] =  useState({
    privateChannel:isChannelPrivate,
    messagesRef: firebase.database().ref("messages"),
    privateMessagesRef: firebase.database().ref("privateMessages"),
    channel: '',
    channelMessages:'',
    loading:true,
    channelnumUniqueUsers:'',
    searchTerm:'',
    searchLoading: false,
    searchResults:[],
    isthereMessage:false,
  });
  useEffect(()=> {
    if(currentChannelID) {
      setMessageData((e) => ({...e,
        channel: currentChannelID,
    }));  
       addListener(currentChannelID)
    }
},[currentChannelID])    //whenever there is a change on active ID render Messge section
useEffect(() => {
  //scroll to bottom every time messages change
  bottomRef.current?.scrollIntoView({behavior: 'smooth'});
}, [messageData.channelMessages]);
  const addListener = (channelId) => {
   displayMessageListner(channelId)
  }

const getMessagesRef = () => {
    const { messagesRef, privateMessagesRef, privateChannel } = messageData;
    return privateChannel ? privateMessagesRef : messagesRef;
  };
  const usersInChannelCounter = (Messages) => {
    const uniqueUsers = Messages.reduce((acc,message) => {
      if(!acc.includes(message.user.name)){
        acc.push(message.user.name);
      }
      return acc;
    }, []);
    const numUniqueUsers = `${uniqueUsers.length} users`;
    setMessageData((e) => ({
      ...e,
      ["channelnumUniqueUsers"]:numUniqueUsers,
    }));
    }
  const displayMessageListner = (channelID) =>{ 
let loadedMessages = [];
const ref = getMessagesRef();
loadedMessages=[];
setMessageData((e) => ({
  ...e,
  channelMessages: loadedMessages,
  loading: true,
}));
messageData.messagesRef.child(channelID).on('child_added', collect => {
  loadedMessages.push(collect.val());
 
  setMessageData((e) => ({
    ...e,
    channelMessages: loadedMessages,
  }));
  setMessageData((e) => ({...e,
    loading: false,
    isthereMessage: true,
}));
} )
if(loadedMessages.length === 0){
  setMessageData((e) => ({
    ...e,
    channelMessages: loadedMessages,
    isthereMessage: false,
    loading: false,
  }));
}
usersInChannelCounter(loadedMessages);
  }
  const {channelMessages,channelnumUniqueUsers,searchTerm,searchResults,isthereMessage} = messageData;
if(messageData.loading){
  return (
    <div className="loading-screen-wrap">
      
    <i className="loading-screen"/>
    <h3 className='wait'>Loading Chat... </h3>
    </div>
  );
}
const handleSearchMessages = () => {
  const channelMessages = [messageData.channelMessages];
  const regex = new RegExp(messageData.searchTerm, "gi");  //global and case in
  const searchResults = channelMessages.reduce((acc, message) => {
      Object.keys(message).forEach((e) => {
    if (
      (message[e].conetent && message[e].conetent.match(regex))
      //  ||
      // message.user.name.match(regex)
    ) {
      acc.push(message);
    }
    return acc;
  });}, []);
  setMessageData((e)=> ({ searchResults: searchResults }));
  setTimeout(() => setMessageData((e) => ({ searchLoading: false })), 1000);
};

const handleSearchChange = (e) => {
  const {value} = e;
setMessageData((z) => ({...z,
  searchTerm:value,
  searchLoading:true,
}));
handleSearchMessages();

}
console.log("Channel avatar AT Meaasage:",currentChannel)
  return (
    <section className='Message-section'>
      <MessageHeader channelName={currentChannel.name} avatar={currentChannel.channelAvatar} Members={channelnumUniqueUsers} handleSearchChange={handleSearchChange}
      isChannelPrivate={isChannelPrivate} />
      <div className='message-body arada-scroll' id="message-body">
        { isthereMessage ? searchTerm ? searchResults.map((m) => (
            <Message key={generate()} message={m}  />
        )): channelMessages.map((m) => (
            <Message key={generate()} message={m}  />
        )) : <div className='no-messages-yet-wrap'>
          <h2 id="no-msg">No messages here Yet</h2>
         <img src='https://c.tenor.com/6_-osAtLuHUAAAAi/wave-cute.gif' className='no-msg-anim' alt="Hello..."/> 
         <p className='send-msg-pro'>Send a Message</p>
         </div>
}
<div ref={bottomRef}/>
      </div>
      <SendMessage messageprop={messageData} getmRef={getMessagesRef}/>
    </section>
  )
}
export default Messages; 