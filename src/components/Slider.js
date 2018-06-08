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

let interval, remaining, start

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.time = 3000;
  }

  componentDidMount = () => this.props.fetchPictures()

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Start compDidUpdate");
    
    if (!this.props.pause) {
      start = new Date()
      console.log(remaining);
      interval = window.setTimeout(() => {
        remaining = this.time
        this.nextSlide()
      }, remaining)
    }
  }

  pause = () => {
    remaining -= new Date() - start
    window.clearTimeout(interval)
    this.props.setPause()
  }

  resume = () => {
    this.props.setResume()
  }

  nextSlide = () => {
    interval = window.clearTimeout(interval)
    const { setIndex, currentIndex, pictures } = this.props
    const newValue = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    setIndex(newValue)
  }

  prevSlide = () => {
    interval = window.clearTimeout(interval)
    const { setIndex, currentIndex, pictures } = this.props
    const newValue = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    setIndex(newValue)     
  }

  indexSlide = (index) => {
    interval = window.clearTimeout(interval)
    this.props.setIndex(index)     
  }
  
  render() {
    const { currentIndex } = this.props
    return this.props.pictures.length === 0 ? <div></div> : (
      <div className="slider">
        <div id="pic-with-arr">
          <LeftArrow prevSlide={this.prevSlide}/>
          <Slide picture={this.props.pictures[currentIndex].hero} pause={this.pause} resume={this.resume} caption={this.props.pictures[currentIndex].text}/> 
          <RightArrow nextSlide={this.nextSlide}/> 
        </div>
        <Thumbnails indexSlide={this.indexSlide} pictures={this.props.pictures}/>
        <div onClick={this.pause}>PAUSE</div>
        <div onClick={this.resume}>RESUME</div>    
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures,
  currentIndex: state.currentIndex,
  pause: state.pause
})

export default connect(mapStateToProps, actions)(Slider)