import React from 'react'

// Components //

import Caption from './Caption'

const Slide = ({ picture, pause, resume, caption }) => {
  return (
    <div className='pic-with-arr-elem slide'>
      <img 
        className='picture'
        onMouseEnter={pause} 
        onMouseLeave={resume} 
        src={picture} 
        alt=""
      />
      <Caption 
        caption={caption} 
      />
    </div>
  )
}

export default Slide