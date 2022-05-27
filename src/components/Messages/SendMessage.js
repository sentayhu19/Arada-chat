import React, {useState} from 'react'
import "./SendMessage.css";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import firebase from '../../firebase';
const SendMessage = ({messageprop}) => {
    const {currentChannelID}= useSelector((state)=>  state.channelReducer);
    const {currentUser} = useSelector((state)=> state.userReducer);
const [sendMessage, setsendMessage] = useState({
    message: '',   //hold msg
    channel:currentChannelID,
    user: currentUser,
    loading:false,
    error: [],
})
const handleonchange = (e) => {
    const {value} = e.target;
setsendMessage((e) => ({...e,
   ["message"] : value,
}));
}
const createMessage = () => {
    console.log("USER: ",sendMessage);
    const Message = {
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user : {
            id:sendMessage.user.uid,   //HERE........... //to be sent to server id and message
            name: sendMessage.user.displayName,
            avatar: sendMessage.user.photoURL,
        },
        conetent: sendMessage.message,
    }
    return Message;
}
const sendMessageHandler = () => {  
    const {messagesRef} = messageprop; 
const {message} = sendMessage;
if(message){
 messagesRef
.child(currentChannelID)  ///use Current Id to chat on that channel
.push()
.set(createMessage())
.then(()=>{
    setsendMessage({
        ['loading']: false,
        message: '', 
        error:[],
    }).cathc(err =>{
       setsendMessage({ ["loading"] :false,
       ["error"]: error.concat(err),
    });

    })
})
}
else{
    setsendMessage({
        ["error"]: error.concat({message: "Add a Message"})
    })
}
}
const {message, error} = sendMessage;
  return (
    <div className='send-message-section'>
        <input type="text" 
        // className={
        //     error.some(error=> error.Message.includes('message'))? "error": ''
        // }
        value={message} placeholder='Write Message...' onChange={handleonchange}/>
        <div>
            <button onClick={sendMessageHandler}>Send Message</button>
            <button>Upload Media</button>
        </div>
    </div>
  )
}
export default SendMessage;
