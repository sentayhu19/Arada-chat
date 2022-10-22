import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import {firebase } from '../../firebase';
import { setcurrentchannel } from '../../redux/arada/action/action';
import { useDispatch } from 'react-redux/es/exports';
import { setPrivateChannel } from '../../redux/arada/action/action';
import { setcurrentChannelId } from '../../redux/arada/action/action';
import { generate } from 'randomized-string';

const DirectMessges = ({currentUser,handleMenu}) => {
    const dispatch = useDispatch();
const [Dm,setDm] = useState({
    user:  currentUser,
    users:[],
    userRef :firebase.database().ref('users'),
    connectedRef: firebase.database().ref('.info/connected'),
    presenseRef: firebase.database().ref('presense'),
});
const [online_users,setOnline_users] = useState(0);
useEffect(()=>{
    if(currentUser){
        addDm(currentUser.uid);
        }
        },[])
const isUserOnline = (user) => {
    return user.status == 'online';
}
const addStatusToUser =  (userId,connected=true,loadedUser) => {
    const updatedUsers = loadedUser.reduce((acc, user) => {
        console.log("Checking",user.uid," matches ",userId);
        if (user.uid === userId) {
          user["status"] = `${connected ? "online" : "offline"}`;
          
          setOnline_users(online_users + 1);
        }
        return acc.concat(user);
      }, []);
      setDm((e) => ({ users: updatedUsers }));
}
const addDm = (currentUSerID) => {
    const loadedUser = [];
    Dm.userRef.on('child_added', collect => {
        if(currentUSerID !== collect.key)
        {
            let user = collect.val();
            user['uid'] = collect.key;
            user['status'] = 'offline';
            loadedUser.push(user);
            setDm((e) => ({
                ...e,
                users: loadedUser,
              }));
        }
    });
    let d =[];
    d = loadedUser;
    Dm.connectedRef.on('value', collect => {
if(collect.val() === true){
const ref = Dm.presenseRef.child(currentUSerID);
ref.set(true);
ref.onDisconnect().remove(err => {
    if(err !== null){
        console.log(err);
    }
})
}
    });
    Dm.presenseRef.on('child_added', collect => {
        if(currentUSerID !== collect.key ){
        addStatusToUser(collect.key,true,loadedUser)
    }
})

Dm.presenseRef.on('child_removed', collect => {
    if(currentUSerID !== collect.key ){
addStatusToUser(collect.key, false,loadedUser);
}
})
}
const getChannelID = (userid) =>{
const currentUserid = userid;
return userid < currentUserid ? 
`${userid}/${currentUserid}` : `${currentUserid}/${userid}`;
}
const changeChannel = (e) =>{
    const channelId = getChannelID(e.uid);
    const channelData = {
  id:channelId,
  name: e.name   //user name
    }; 
    // handleMenu();
dispatch(setcurrentchannel(channelData));
dispatch(setcurrentChannelId(channelData.id));
dispatch(setPrivateChannel(true));

}

 const {users} =  Dm;
  return (
    <div>
        <div className='dm-t'>
        <FontAwesomeIcon className='dm-icon' icon={faMessage}/>
        <div className='direct-msg-online'>
        <h4 className='dm'>Direct Messges ({users.length})  </h4>
        <p className={online_users > 0 ? 'users-online': 'users-online' }>[ {online_users} ] users online</p>
        </div>
        </div>
        <div className='dm-users-list'>
                   {users.map((e)=> (
           <div key={generate()}>
         <div key={generate()} className='dm-info'onClick={()=> changeChannel(e)}>
           <img key={generate()} src={e.avatar} className="user-av-dm" alt={e.name} name={e.name}/>
           <p key={generate()} className='dm-user'>{e.name}</p>
           <p key={generate()} className={ isUserOnline(e) ? 'online': 'offline'} title={ isUserOnline(e) ? 'online': 'offline'}>●</p>
           </div>
           </div>
       )) }
      </div>

        </div>
  )
return "";
}
export default DirectMessges;
