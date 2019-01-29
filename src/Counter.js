import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    counter: 0,
  }
  changeCount = (direction) => {
    let newCounter = 0;
    if (direction === 'inc') {
      newCounter = this.state.counter + 1;
      this.setState({
        counter: newCounter,
        error: false,
      });
    } else {
      newCounter = this.state.counter > 0 ? this.state.counter - 1 : 0;
      this.setState({
        counter: newCounter,
        error: this.state.counter < 1
      });
    }
  }
  render() {
    const messageClass = this.state.error ? 'error-message visible' : 'error-message';
    return (
      <div className="counter-wrapper" data-test="component-counter">
        <div className="counter-display">
          <h1>
            The counter is currently <span className="counterValue" data-test="counter-value">{this.state.counter}</span>
          </h1>
        </div>
        <h3 className={messageClass} data-test="error-message">
          YOU CANNOT DO THAT!
        </h3>
        <div className="button-wrapper">
          <button className="button-increment" data-test="button-increment" onClick={() => { this.changeCount('inc'); }}>Increment</button>
        </div>
        <div className="button-wrapper">
          <button className="button-decrement" data-test="button-decrement" onClick={() => { this.changeCount('dec'); }}>Decrement</button>
        </div>
      </div>
    )
  }
};

export default Counter;