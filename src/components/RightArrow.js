import React from 'react'

const RightArrow = ({ nextSlide }) => {
  return (
    <div className="point pic-with-arr-elem arrow-div" onClick={nextSlide}>
      <i className="fa fa-arrow-right fa-5x arrow" aria-hidden="true"></i>
    </div>
  )
}

export default RightArrow