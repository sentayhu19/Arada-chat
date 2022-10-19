import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import './MessageHeader.css';
import {firebase } from '../../firebase';

const MessageHeader = ({channelName,avatar,Members,handleSearchChange}) => {
  const { currentUSerID } = useSelector((state)=> state.userReducer);
  const [search,setSearch] = useState({
    key: '',
    userRef :firebase.database().ref('users'),
    result:[],
    susername:'',
    suseravatar:''
    
  });
  const handleChange = (e) => {
    handleSearch(e.target.value);

  }
  const handleSearch = (key) => {
    const users = [];
    search.userRef.on('child_added', collect => {
      if(currentUSerID !== collect.key)
      {
          let user = collect.val();
          users.push(user);
          setSearch({...search,
              result: users,
            });
      }
      setSearch({...search, key: key});
      users.map(user => {
        if(user.name.toLowerCase().includes(key.toLowerCase())){
          setSearch({...search,susername: user.name, suseravatar: user.avatar});
        }
      })
  });
  }
  return (
    <div className='message-header'>
      <input type='text' placeholder='Search Arada Chat Users'className='search-arada-users' onChange={handleChange} />
      <div class='header-main'>
        <div className='channel-info'>
          <div className='channel-flex'>
          <img src={avatar} alt="channel-avatar" className="channel-avatar"/>
    <h2> {channelName}</h2> 
    </div>
    <h4>{Members}</h4>
    </div>
    
    <div className='search'>
        <input type="text" onChange={handleSearchChange} placeholder='Search Message'/>
    </div>
    </div>
    {search.key ? <div class='search-users search-name'>Search result :
    <div className='search-result-flex'>
      <img src={search.suseravatar} className='user-av-dm' alt="search result"/>
       <p className='search-name'>{search.susername}</p>
       </div>
       </div>
        : '' }
    </div>
  )
}

export default  MessageHeader;
