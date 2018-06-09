import { connect } from 'react-redux'

// Actions //

import * as actions from '../actions'

// Containers //

import Slider from '../components/Slider'

const mapStateToProps = state => ({
  pictures: state.fetching.pictures,
  currentIndex: state.slider.currentIndex,
  pause: state.slider.pause
})

export default connect(mapStateToProps, actions)(Slider)