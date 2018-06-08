import React from 'react'

const LeftArrow = ({ prevSlide }) => {
  return (
    <div className="backArrow left-arrow point" onClick={prevSlide}>
      <i className="fa fa-arrow-left fa-5x" aria-hidden="true"></i>
    </div>
  )
}

export default LeftArrow