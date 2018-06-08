import React from 'react'
import pictures from '../api/pictures'
import Thumbnail from './Thumbnail'

const Thumbnails = ({ indexSlide }) => {
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