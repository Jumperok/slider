import React from 'react'
import { connect } from 'react-redux'

// Actions // 

import * as actions from '../actions'

const Thumbnail= ({ src, currentIndex, indexSlide }) => {  
  return (
    <div>
      <img src={src} alt="" className="small column" onClick={() => indexSlide(currentIndex)}/>
    </div>
  )
}

export default connect(null, actions)(Thumbnail)