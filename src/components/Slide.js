import React from 'react'

// Components //

import Caption from './Caption'

const Slide = ({ picture, pause, resume, caption }) => {
  return (
    <div id='container'>
      <img 
        onMouseEnter={pause} 
        onMouseLeave={resume} 
        src={picture} 
        alt=""
      />
      <Caption 
        className="bottom-center caption" 
        caption={caption} 
      />
    </div>
  )
}

export default Slide