import React from 'react'

const RightArrow = ({ nextSlide }) => {
  return (
    <div onClick={nextSlide}>
      Right
    </div>
  )
}

export default RightArrow