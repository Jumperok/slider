import React from 'react'

// Actions // 

const Thumbnail= ({ src, currentIndex, indexSlide, isActive }) => {
  return (
    <div>
      <img 
        src={src} 
        alt="" 
        className={`small column point ${isActive}`} 
        onClick={() => indexSlide(currentIndex)}
      />
    </div>
  )
}

export default Thumbnail