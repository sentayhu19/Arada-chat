import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import firebase from '../../firebase';
import { useSelector } from 'react-redux/es/exports';
import Channeld from './Channeld';

export default function Channel() {
    useEffect(()=>{
channelLoader();

    },[])
    const [modal, setModal] = useState({ModalShow: false});
    const { currentUser, loading } = useSelector((state)=> state.userReducer);
    const [channel, setChannel] = useState({
        currentUser,
        channel: [],
        channelName:"",
        channelDetails: "",
        channelRef: firebase.database().ref('channels'),
    })
    const channelLoader = () => {
        const loadedchannelsList=[];
        channel.channelRef.on('child_added',collect =>{
      loadedchannelsList.push(collect.val());
      const ch ="channel";
      setChannel((e) => ({ ...e,
        [ch]: loadedchannelsList}));
      console.log("load on state: ",channel);
        })
    }
    
    const handleClick = () => { 
    setModal({ModalShow: true})
    }
    const removeModal = () =>{
        setModal({ModalShow: false});
    }
    const handleChange = (e) =>{
        const { name } = e.target;
        const { value } = e.target;
        setChannel((e) => ({
          ...e,
          [name]: value,
        }));
console.log("on change: -> ",channel);
    }
   const createChannel= () => {
       const {channelRef, channelName, channelDetails, currentUser} = channel;
       const key= channelRef.push().key;
       const newChannelProp = {
           id:key,
           name: channelName,
           details: channelDetails,
           createdBy : {
name: currentUser.displayName,
avatar: currentUser.photoURL,
           }
       }
       channelRef
       .child(key)
       .update(newChannelProp)
       .then(()=>{
           console.log("channel created!");
           setModal({ModalShow: false});
       })
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    createChannel();
    }
    const {channelName, channelDetails} = channel;
  return (
      
    <div>
        <div className='channels-wrap'>
        <h4 className='channels'>
            <FontAwesomeIcon icon={faArrowsLeftRight}/>
            CHANNELS ({channel.channel.length})
            
            </h4>
            <FontAwesomeIcon onClick={handleClick} className='channels' icon={faPlus}/>
        </div>
        <ul className='channels-list'>
        {channel.channel.map((c)=> (             
               <Channeld channelData={c.name} />
            )) 
                }
                </ul>
        {modal.ModalShow ?
             <div className='modal'>
                 <div className='modal-sub'>
             <h2 className='create-new'>Create New Chaneel</h2>
             <form onSubmit={handleSubmit}>
             <div className='channel-input'>
             <input type="text" value={channelName} name="channelName" onChange={handleChange} required className='channel-name' placeholder='Channel Name'/>
             <textarea className='channel-description' name="channelDetails" value={channelDetails} onChange={handleChange}  rows="4" cols="60" maxLength="200" placeholder='Channel Description in 200 characters'/>
             </div>
             <div className='create-channel-btn-wrap'>
             <button type='submit' className='create'>Create New Channel</button>
             <button type='cancel' className='cancel' onClick={removeModal}>Cancel</button>
             </div>
             </form>
             </div>
             </div>
         :
        
        ''}
        </div>
  )
}
