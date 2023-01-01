import React from 'react'
import './features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className='features-wraper bgf'>
        <div className='features1-wraper ' data-aos="flip-left">
            <FontAwesomeIcon icon={faMessage} className='features-icon'/>
        <h1 className='feature1' title='DM is a private mode of communication between arada users'>Direct Messages</h1>
        <p className='feature1-info'>You can send direct messages to your friends and family</p>
        </div>
        <div className='features1-wraper' data-aos="flip-right">
            <FontAwesomeIcon icon={faBullhorn} className='features-icon'/>
        <h1 className='feature2'>Channels</h1>
        <p className='feature2-info'>You can create a channel and talk on the channel</p>
        </div>
    </div>
  )
}

export default Features;