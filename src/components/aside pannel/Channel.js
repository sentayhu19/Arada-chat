import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Channeld from './Channeld';
import { generate } from 'randomized-string';
import { setcurrentchannel, setcurrentChannelId, setPrivateChannel } from '../../redux/arada/action/action';
import DirectMessges from './DirectMessges';
import { firebase } from '../../firebase';

const Channel = ({stateid}) => {
    
    const { currentUser } = useSelector((state)=> state.userReducer);
    const dispatch = useDispatch();
    // let x ="DEFAUL";
    // x=stateid;
    const [modal, setModal] = useState({ModalShow: false});
    
    const [channel, setChannel] = useState({
        currentUser,
        channel: [],
        channelName:"",
        channelDetails: "",
        channelRef: firebase.database().ref('channels'),
        firstLoad: true,
        activeChannel: "",
        channels: null,
    });
    useEffect(()=>{
  ///HERE....................****************
        channelLoader();
            },[])
let channelRefCopy="";
    const setFirstChannel =  (loadedchannelsList) => {
    const firstChannel = loadedchannelsList[0];
if(channel.firstLoad) {
    dispatch(setcurrentchannel(firstChannel));
    setActiveChannel(firstChannel);
}
// setChannel({['firstLoad']: false});

    }
    const setActiveChannel = (channelInfo) => {
        setChannel((e) => ({
            ...e,
            activeChannel: channelInfo.id,
          }));
    }
    const changeChannel = (channel) =>{
        setActiveChannel(channel);     
        setcurrentchannel(channel);
        setPrivateChannel(false);
    }
    const channelLoader = () => {
        const loadedchannelsList=[];
       channel.channelRef.on('child_added',collect => {
       loadedchannelsList.push(collect.val());
       setChannel((e) => ({
        channel: loadedchannelsList
    })); 
    setFirstChannel(loadedchannelsList); 
        })
         
    }
    
    const handleClick = () => { 
    setModal({["ModalShow"]: true})
    }
    const removeModal = () => {
        setModal({["ModalShow"]: false});
    }
    const handleChange = (e) =>{
        const { name } = e.target;
        const { value } = e.target;
        setChannel((e) => ({
          ...e,
          [name]: value,
        }));
    }
   const createChannel= (currentUser1) => {
   const channelRefcpy=firebase.database().ref('channels');
        const {channelName, channelDetails} = channel;
        const key = channelRefcpy.push().key;
       const newChannelProp = {
           id:key,
           name: channelName,
           details: channelDetails,
        channelAvatar: `https://ui-avatars.com/api/?name=${channelName}`,
           createdBy : {
name: currentUser1.displayName,
avatar: currentUser1.photoURL,
           }
       }
       channelRefcpy
       .child(key)
       .update(newChannelProp)
       .then(()=>{
           setModal({ModalShow: false});   //New channel created
       })
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    createChannel(currentUser);
    }
    
    const {channelName, channelDetails,activeChannel} = channel;
    dispatch(setcurrentChannelId(activeChannel));
  return (
    <div>
        <div className='channels-wrap'>
        <FontAwesomeIcon icon={faArrowsLeftRight} className="channels" />
        <h4 className='channels'>
           
            CHANNELS ({channel.channel.length})
            </h4>
            <FontAwesomeIcon onClick={handleClick} className='channels plus-icn' icon={faPlus}/>
        </div>
        <ul className='channels-list'>
        {channel.channel.map((c)=> (             
               <Channeld key={generate()} channelData={c} active={channel.activeChannel}  />
            )) 
                }
                </ul>
                <DirectMessges currentUser={currentUser}/>
        {modal.ModalShow ?
             <div className='modal'>
                 <div className='modal-sub'>
             <h2 className='create-new'>Create New Channel</h2>
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
export default Channel;