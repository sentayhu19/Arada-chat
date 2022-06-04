import React, {useState, useEffect} from 'react'
import MessageHeader from './MessageHeader';
import "./Messages.css";
import firebase from '../../firebase';
import SendMessage from './SendMessage'
import { useSelector,useDispatch } from 'react-redux';
import Message from './Message';
import { generate } from 'randomized-string';

const Messages = () => {
  const dispatch = useDispatch();
  const {currentChannelID,currentChannel}= useSelector((state)=>  state.channelReducer);
  const [messageData, setMessageData] =  useState({
    messagesRef: firebase.database().ref("messages"),
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
        ["channel"]: currentChannelID,
    }));  
       addListener(currentChannelID)
    }
},[currentChannelID])    //whenever there is a change on active ID render Messge section
  const addListener = (channelId) => {
   displayMessageListner(channelId)
  }
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
loadedMessages=[];
loadedMessages=[];
messageData.messagesRef.child(channelID).on('child_added', collect => {
  loadedMessages.push(collect.val());
 
  setMessageData((e) => ({
    ...e,
    ["channelMessages"]: loadedMessages,
  }));
  setMessageData((e) => ({...e,
    ["loading"]: false,
    isthereMessage: true,
}));
} )
if(loadedMessages.length === 0){
  setMessageData((e) => ({
    ...e,
    ["channelMessages"]: loadedMessages,
    isthereMessage: false,
  }));
}
usersInChannelCounter(loadedMessages);
  }
  const {channelMessages,channelnumUniqueUsers,searchTerm,searchResults,isthereMessage} = messageData;
if(messageData.loading){
  return (
    <div className="loading-screen-wrap">
      
    <i className="loading-screen"/>
    <h3 className='wait'>Please wait Loading Chat... </h3>
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
  setMessageData((e)=> ({ ['searchResults']: searchResults }));
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
console.log("ISthere Message ....",isthereMessage);
  return (
    <section className='Message-section'>
      
      <MessageHeader channelName={currentChannel.name} avatar={currentChannel.channelAvatar} Members={channelnumUniqueUsers}
      handleSearchChange={handleSearchChange}
      />
      <div className='message-body'>
        { isthereMessage ? searchTerm ? searchResults.map((m) => (
            <Message key={generate()} message={m} />
        )): channelMessages.map((m) => (
            <Message key={generate()} message={m} />
        )) : <div className='no-messages-yet-wrap'>
          <h2 id="no-msg">No messages here Yet</h2>
         <img src='https://c.tenor.com/6_-osAtLuHUAAAAi/wave-cute.gif' className='no-msg-anim' alt="Hello..."/> 
         <p className='send-msg-pro'>Send a Message</p>
         </div>
}
      </div>
      <SendMessage messageprop={messageData}/>
    </section>
  )
}
export default Messages; 