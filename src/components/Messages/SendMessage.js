import React from 'react'
import "./SendMessage.css";

const SendMessage = () => {
  return (
    <div className='send-message-section'>
        <input type="text"/>
        <div>
            <button>Send Message</button>
            <button>Upload Media</button>
        </div>
    </div>
  )
}
export default SendMessage;
