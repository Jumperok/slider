import React from 'react'

const RightArrow = ({ nextSlide }) => {
  return (
    <div className="nextArrow right-arrow" onClick={nextSlide}>
      <i className="fa fa-arrow-right fa-5x" aria-hidden="true"></i>
    </div>
  )
}

export default RightArrow