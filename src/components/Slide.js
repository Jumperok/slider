import React from 'react'
import Caption from './Caption'

const Slide = ({ picture, pause, resume, caption }) => {
  return (
    <div id='container'>
      <img onMouseEnter={pause} onMouseLeave={resume} src={picture} alt={picture} />
      <Caption className="bottom-center" caption={caption} />
    </div>
  )
  
}

export default Slide