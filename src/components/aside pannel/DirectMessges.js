import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import firebase from '../../firebase';
const DirectMessges = ({currentUser}) => {
const [Dm,setDm] = useState({
    user:  currentUser,
    users:[],
    userRef :firebase.database().ref('users'),
    connectedRef: firebase.database().ref('.info/connected'),
    presenseRef: firebase.database().ref('presenseRef')
});
useEffect(()=>{
    if(currentUser){
        addDm(currentUser.uid);
        }
        },[])

const addStatusToUser = (userId,connected=true) => {
    const updatedUsers = Dm.users.reduce((acc, user) => {
        if (user.uid === userId) {
          user["status"] = `${connected ? "online" : "offline"}`;
        }
        return acc.concat(user);
      }, []);
      setDm((e) => ({ users: updatedUsers }));
}
const addDm = (currentUSerID) => {
    console.log("add DM",currentUSerID);
    const loadedUser = [];
    Dm.userRef.on('child_added', collect => {
        if(currentUSerID !== collect.key)
        {
            let user = collect.val();
            user['uid'] = collect.key;
            user['status'] = 'offLine';
            loadedUser.push(user);
            setDm((e)=> ({...e,
            ["users"]: loadedUser,
            }))
        }
    });
    Dm.connectedRef.on('value', collect =>{
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
        addStatusToUser(collect.key)
    }
})

Dm.presenseRef.on('child_removed', collect => {
    if(currentUSerID !== collect.key ){
addStatusToUser(collect.key, false);
}
})
}
 const {users} =  Dm;
 console.log("DM user: ",users);
  return (
    <div>
        <div className='dm-t'>
        <FontAwesomeIcon className='dm-icon' icon={faMessage}/>
        <h4 className='dm'>Direct Messges ({users.length})  </h4>
        </div>
        <div className='dm-users-list'>
                   {users.map((e)=> (
           <>
           <img src={e.avatar} className="user-av-dm" alt={e.name} name={e.name}/>
           <p className='dm-user'>{e.name}</p>
           </>
       )) }
      </div>

        </div>
  )
}
export default DirectMessges;
