import React from 'react'

const LeftArrow = ({ prevSlide }) => {
  return (
    <div onClick={prevSlide}>
      Left
    </div>
  )
}

export default LeftArrow