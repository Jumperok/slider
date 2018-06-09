import React from 'react'

// Components //

import Slider from '../containers/SliderContainer'
import Title from './Title'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <Slider />
      </React.Fragment>  
    )
  }
}

export default App;
