import React from 'react'
import './Aside.css';
import Userpannel from './Userpannel';
import Channel from './Channel';


export default function Aside() {
  return (
    <div className='menu'>
     <Userpannel/>
     <Channel/>
    </div>
  )
}
