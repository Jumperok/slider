import React from 'react'

// Components //

import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Thumbnails from './Thumbnails'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.start = 0
    this.interval = 3000
    this.timer = null
    this.remaining = 0
  }

  componentDidMount = () => this.props.fetchPictures()

  componentWillUnmount = () => window.clearTimeout(this.timer)

  componentDidUpdate = () => {
    const { currentIndex, pictures, pause } = this.props

    if (!pause) {
      this.start = new Date()
      this.timer = window.setTimeout(() => {
        this.remaining = this.interval
        this.nextSlide(currentIndex, pictures.length)
      }, this.remaining)
    }
  }

  pause = () => {
    this.remaining -= new Date() - this.start
    window.clearTimeout(this.timer)
    this.props.setPause()
  }

  nextSlide = (currentIndex, picturesLength) => {
    this.timer = window.clearTimeout(this.timer)
    this.props.nextPicture(currentIndex, picturesLength)
  }

  prevSlide = (currentIndex, picturesLength) => {
    this.timer = window.clearTimeout(this.timer)
    this.props.prevPicture(currentIndex, picturesLength)
  }

  indexSlide = (index) => {
    this.timer = window.clearTimeout(this.timer)
    this.props.setIndex(index)     
  }
  
  render() {
    const { currentIndex, pictures, setResume } = this.props
    return pictures.length === 0 ? <div></div> : (
      <div className="slider">
        <div id="pic-with-arr">
          <LeftArrow 
            prevSlide={() => this.prevSlide(currentIndex, pictures.length)}
          />
          <Slide 
            picture={pictures[currentIndex].hero} 
            pause={this.pause} 
            resume={setResume} 
            caption={pictures[currentIndex].text}
          /> 
          <RightArrow 
            nextSlide={() => this.nextSlide(currentIndex, pictures.length)}
          /> 
        </div>
        <Thumbnails 
          currentIndex={currentIndex}
          indexSlide={this.indexSlide} 
          pictures={pictures}
        />
      </div>
    )
  }
}

export default Slider
