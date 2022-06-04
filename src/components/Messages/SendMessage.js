import React, {useState} from 'react'
import "./SendMessage.css";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import firebase from '../../firebase';
// import mime from 'mime-types';
import { generate } from 'randomized-string';

const SendMessage = ({messageprop}) => {
    const {currentChannelID}= useSelector((state)=>  state.channelReducer);
    const {currentUser} = useSelector((state)=> state.userReducer);
const [sendMessage, setsendMessage] = useState({
    message: '',   //hold msg to be sent 
    channel:currentChannelID,
    user: currentUser,
    loading:false,
    error: [],
    modal:false,
    file:null,
    uploadTask: null,
    uploadState: "",
    storageRef:firebase.storage().ref(),
})
const removeModal = () => {     //REMOVE FILEUPLOAD MODAL
    setsendMessage((e)=> ({...e, ["modal"]: false})); 
}

const displayModal = () =>{      //SHOW FILEUPLOAD MODAL
    setsendMessage((e)=> ({...e,
        ["modal"]: true,
    }))
  }
const handleonchange = (e) => {
    const {value} = e.target;
setsendMessage((e) => ({...e,
   ["message"] : value,
}));
}
const createMessage = (fileUrl = null) => {
    const Message = {
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user : {
            id:sendMessage.user.uid,   //HERE...........to be sent to server id and message
            name: sendMessage.user.displayName,
            avatar: sendMessage.user.photoURL,
        },
        // conetent: sendMessage.message,
    };
    if(fileUrl!==null){
        message['image'] = fileUrl;
    }
    else{
        Message['conetent'] =sendMessage.message;
    }
    return Message;
}
const sendMessageHandler = () => { 
    setsendMessage({
        ["loading"]: true,
    }) 
    const {messagesRef} = messageprop; 
const {message} = sendMessage;
if(message){
 messagesRef
.child(currentChannelID)  ///use Current Id to chat on that channel
.push()
.set(createMessage())
.then(()=> {
    setsendMessage({
        ['loading']: false,
        message: '', 
        error:[""],
    })}).catch(err =>{
       setsendMessage({ ["loading"] :false,
       ["error"]: error.concat(err),
    });
    })
}

else{
    setsendMessage((e)=> ({...e,
        ["error"]: error.concat({message: "Add a Message"}),
    }))
}
}
const sendMediaMessages = (fileUrl, ref, pathToUpload) => {
    // console.log("SEND MEDIA GOT","file url: ", fileUrl," REF: ",ref,"path: ",pathToUpload)
     ref
    .child(pathToUpload) 
    .push()
    .set(createMessage(fileUrl))
    .then(()=>{
        setsendMessage((e)=> ({...e,
            uploadState: 'upload done',
        }))
        .catch(err =>{
            setsendMessage((e) => ({...e,
                error: err,
            }))
        })
    })
}
const uploadFile = (file, metaDataObj) => {
// console.log("FILE AT UPLOAD is ", file, "and meta", metaDataObj);
const pathToUpload = sendMessage.channel;
const ref = sendMessage.storageRef;
const filePath = `chat/public/${generate()}.jpg`;
// console.log("[PASS THIS ]FILE path", filePath,"ref",ref,"path to download", pathToUpload,"CHANNEL ID");
setsendMessage((e)=> ({...e,
uploadState: 'uploading...',
uploadTask: sendMessage.storageRef.child(filePath).put(file,metaDataObj),
}));
// err => {
//     console.log("ERRRRROR",err);
//     setsendMessage((e)=> ({...e,
//         uploadTask: null,
//         uploadState: "Error",
//         error: err,
//       }))
// },
    // sendMessage.uploadTask.snapshoot.ref.getDownloadURL().then(downloadURL=>{
        sendMediaMessages(filePath,ref,pathToUpload);
    // })

}
const clearFile = ()=>{
    setsendMessage({
        ["file"]:null,
    })
}


// const isAuthorizeed = filename => sendMessage.authorized.includes(filename);
const sendMedia  = () => {
    
    const {file} =  sendMessage;
    // console.log("TESt for file.name: ",isAuthorizeed(file.name));
    if(file !== null){
        // console.log("TRUE --> 1")
const metaDataObj = {contentType:(file.name)};
uploadFile(file,metaDataObj);
removeModal();
clearFile();
    }
    else {
        setsendMessage((e)=> ({...e,
            ["error"]: "No File Selected!"}))
        }
    }
const fileUpload = (event) => {
const file = event.target.files[0]
if(file){
    setsendMessage((e)=> ({...e,
        ["file"]: file,
    }))
}
}
const {message, error, modal, file} = sendMessage;
  return (
    <div className='send-message-section'>
        <input type="text" 
        // className={
        //     error.some(error=> error.Message.includes('message'))? "error": ''
        // }
        value={message} placeholder='Write Message...' onChange={handleonchange}/>
        <div>
            <button  className="send-msg-btn" required onClick={sendMessageHandler}>Send Message</button>
            <button onClick={displayModal} className='upload-media-btn'>Upload Media</button>
        </div>
        {modal ?  
        <div className='file-upload-wrap'>
        <div className='upload'>
            <h2 className='create-new'>FileUpload</h2>
        <input type="file" className='upload-media-file'  accept="image/png, image/gif, image/jpeg"  onChange={fileUpload} />
        <div className='create-channel-btn-wrap'>
             <button type='submit' className='create' onClick={sendMedia}>Send</button>
             <button type='cancel' className='cancel' onClick={removeModal}>Cancel</button>
             </div>
             </div>
        </div>:
         ''
         };
    </div>
  )
}
export default SendMessage;
