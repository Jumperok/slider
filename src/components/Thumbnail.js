import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'

const Thumbnail= ({ src, currentIndex, indexSlide }) => {  
  return (
    <div>
      <img src={src} alt="" className="small column" onClick={() => indexSlide(currentIndex)}/>
    </div>
  )
}

export default connect(null, actions)(Thumbnail)