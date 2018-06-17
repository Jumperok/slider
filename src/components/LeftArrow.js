import React from 'react'

const LeftArrow = ({ prevSlide }) => {
  return (
    <div className="point arrow-div" onClick={prevSlide}>
      <i className="fa fa-arrow-left fa-5x arrow" aria-hidden="true"></i>
    </div>
  )
}

export default LeftArrow