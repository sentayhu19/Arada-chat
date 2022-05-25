import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function Channel() {
    const [modal, setModal] = useState({ModalShow: false});
    const handleClick = () => { 
    setModal({ModalShow: true})
    console.log("CLicked")
    }
    const removeModal = () =>{
        setModal({ModalShow: false});
    }
  return (
    <div>
        <div className='channels-wrap'>
        <h4 className='channels'>
            <FontAwesomeIcon icon={faArrowsLeftRight}/>
            CHANNELS (0)
            
            </h4>
            <FontAwesomeIcon onClick={handleClick} className='channels' icon={faPlus}/>
        </div>
        {modal.ModalShow ?
             <div className='modal'>
                 <div className='modal-sub'>
             <h2 className='create-new'>Create New Chaneel</h2>
             <form>
             <div className='channel-input'>
             <input type="text" required className='channel-name' placeholder='Channel Name'/>
             <textarea className='channel-description' rows="4" cols="60" maxLength="200" placeholder='Channel Description in 200 characters'/>
             </div>
             <div className='create-channel-btn-wrap'>
             <button type='submit' className='create'>Create New Channel</button>
             <button type='submit' className='cancel' onClick={removeModal}>Cancel</button>
             </div>
             </form>
             </div>
             </div>
         :
        
        ''}
        </div>
  )
}
