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
    "hero": "https://placeimg.com/640/480/animals",
    "text" : "Animals are here"
  },
  {
    "hero": "https://placeimg.com/640/480/people",
    "text" : "People are here"
  },
  {
    "hero": "https://placeimg.com/640/480/tech",
    "text" : "Tech are here"    
  }
]

let interval, remaining, start

class Slider extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     pause: false
  //   }
  // }

  //componentDidMount = () => getSliderImages()



  componentDidUpdate = (prevProps, prevState) => {
    console.log("Start compDidUpdate");
    console.log(this.props);
    
    let time = 3000;
    if (!this.props.pause) {
      start = new Date()
      console.log(remaining);
      interval = window.setTimeout(() => {
        remaining = time
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
    const { setIndex, currentIndex } = this.props
    const newValue = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    setIndex(newValue)
  }

  prevSlide = () => {
    interval = window.clearTimeout(interval)
    const { setIndex, currentIndex } = this.props
    const newValue = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    setIndex(newValue)     
  }
  
  render() {
    const { currentIndex } = this.props
    return (
      <div className="slider">
				<Slide picture={pictures[currentIndex].hero} pause={this.pause} resume={this.resume} caption={pictures[currentIndex].text}/>
        <LeftArrow prevSlide={this.prevSlide}/>
        <RightArrow nextSlide={this.nextSlide}/>    
        <div onClick={this.pause}>PAUSE</div>
        <div onClick={this.resume}>RESUME</div>    
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
  pause: state.pause
})

export default connect(mapStateToProps, actions)(Slider)