import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
  
  static defaultProps = {
    number: 15
  }

  render() {
    return(
      <div className="Ball">
        {this.props.number}
      </div>
    )
  }
}

export default Ball;