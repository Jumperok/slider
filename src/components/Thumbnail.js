import React from 'react'

// Actions // 

const Thumbnail= ({ src, currentIndex, indexSlide, isActive }) => (
  <div>
    <img 
      src={src} 
      alt="" 
      className={`small thumbnail point ${isActive}`} 
      onClick={() => indexSlide(currentIndex)}
    />
  </div>
)


export default Thumbnail