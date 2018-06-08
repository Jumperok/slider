import React from 'react'
import redux from 'redux'
import { connect } from 'react-redux'

// Actions //

import * as actions from '../actions'

// Components //

import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Thumbnails from './Thumbnails'

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.start = 0;
    this.time = 10000;
    this.interval = 0;
    this.remaining = 0;
  }

  componentDidMount = () => this.props.fetchPictures()

  componentDidUpdate = (prevProps, prevState) => {    
    if (!this.props.pause) {
      this.start = new Date()
      this.interval = window.setTimeout(() => {
        this.remaining = this.time
        this.nextSlide()
      }, this.remaining)
    }
  }

  pause = () => {
    this.remaining -= new Date() - this.start
    window.clearTimeout(this.interval)
    this.props.setPause()
  }

  resume = () => {
    this.props.setResume()
  }

  nextSlide = () => {
    this.interval = window.clearTimeout(this.interval)
    const { setIndex, currentIndex, pictures } = this.props
    const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    setIndex(newIndex)
  }

  prevSlide = () => {
    this.interval = window.clearTimeout(this.interval)
    const { setIndex, currentIndex, pictures } = this.props
    const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    setIndex(newIndex)     
  }

  indexSlide = (index) => {
    this.interval = window.clearTimeout(this.interval)
    this.props.setIndex(index)     
  }
  
  render() {
    const { currentIndex } = this.props
    return this.props.pictures.length === 0 ? <div></div> : (
      <div className="slider">
        <div id="pic-with-arr">
          <LeftArrow 
            prevSlide={this.prevSlide}
          />
          <Slide 
            picture={this.props.pictures[currentIndex].hero} 
            pause={this.pause} 
            resume={this.resume} 
            caption={this.props.pictures[currentIndex].text}
          /> 
          <RightArrow 
            nextSlide={this.nextSlide}
          /> 
        </div>
        <Thumbnails 
          currentIndex={currentIndex}
          indexSlide={this.indexSlide} 
          pictures={this.props.pictures}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pictures: state.fetching.pictures,
  currentIndex: state.slider.currentIndex,
  pause: state.slider.pause
})

export default connect(mapStateToProps, actions)(Slider)