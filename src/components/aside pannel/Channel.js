import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function Channel() {
  return (
    <div>
        <div className='channels-wrap'>
        <h4 className='channels'>
            <FontAwesomeIcon icon={faArrowsLeftRight}/>
            CHANNELS (0)
            
            </h4>
            <FontAwesomeIcon className='channels' icon={faPlus}/>
        </div>
        </div>
  )
}
