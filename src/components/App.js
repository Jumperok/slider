import React, { Component } from 'react';
import Slider from './Slider'
import Title from './Title'

class App extends Component {
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
