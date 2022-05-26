import React from 'react'
import MessageHeader from './MessageHeader';
import "./Messages.css";

import SendMessage
 from './SendMessage'
export default function Messages() {
  return (
    <section className='Message-section'>
      <MessageHeader/>
      <div className='message-body'>
        
      </div>
      <SendMessage/>
    </section>
  )
}
