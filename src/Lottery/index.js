import React, { Component } from 'react';
import './Lottery.css';
import Ball from '../Ball';

class Lottery extends Component {

  static defaultProps = {
    title: 'Lottery',
    numBalls: 6,
    maxNum: 40
  }

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({length: this.props.numBalls})
    }
  }
  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }));
  }

  handleClick(){
    this.generate();
  }

  render() {
    return(
      <section className="Lottery">
        <h2 className="Lottery-title">{this.props.title}</h2>
        <div className="Lottery-balls-container">
          {this.state.nums.map(n => <Ball number={n} />)}
        </div>
        <button className="Lottery-button" onClick={() => this.handleClick()}>New</button>
      </section>
    )
  }
}

export default Lottery;