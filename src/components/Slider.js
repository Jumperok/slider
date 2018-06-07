import React from 'react'
import redux from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import { getSliderImages } from '../actions'

const pictures = [
  {
    "hero": "https://placeimg.com/640/480/animals"
  },
  {
    "hero": "https://placeimg.com/640/480/people"    
  },
  {
    "hero": "https://placeimg.com/640/480/tech"
  }
]

class Slider extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentIndex: 0
  //   }
  // }

  //componentDidMount = () => getSliderImages()

  nextSlide = () => {
    const { setIndex, currentIndex } = this.props
    const newValue = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    setIndex(newValue)
  }

  prevSlide = () => {
    const { setIndex, currentIndex } = this.props
    const newValue = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    setIndex(newValue)     
  }
  
  render() {
    const { currentIndex } = this.props
    return (
      <div className="slider">
				<Slide picture={pictures[currentIndex].hero}/>
        <LeftArrow prevSlide={this.prevSlide}/>
        <RightArrow nextSlide={this.nextSlide}/>        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex
})

export default connect(mapStateToProps, actions)(Slider)