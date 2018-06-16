import React from 'react'

// Components //

import Thumbnail from './Thumbnail'

const Thumbnails = ({ indexSlide, pictures, currentIndex }) => {
  return (
    <div className="thumbnails">
      {
        pictures.map((picture, index) => {
          return (
            <Thumbnail 
              src={picture.hero} 
              key={index} 
              currentIndex={index} 
              indexSlide={indexSlide}
              isActive={currentIndex === index ? 'active-pic' : null}
            />
          )
        })
      }
    </div>
  )
}

export default Thumbnails