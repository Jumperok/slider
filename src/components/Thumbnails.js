import React from 'react'

// Components //

import Thumbnail from './Thumbnail'

const Thumbnails = ({ indexSlide, pictures }) => {
  return (
    <div className="row">
      {
        pictures.map((picture, index) => {
          return <Thumbnail src={picture.hero} key={index} currentIndex={index} indexSlide={indexSlide}/>
        })
      }
    </div>
  )
}

export default Thumbnails