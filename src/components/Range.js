import React, { Component } from 'react'
import { subscribe } from 'mqtt-react';

export class Range extends Component {
  state = {
    min: undefined,
    max: undefined
  };

  setThreshold(e) {
    e.preventDefault();
    //MQTT client is passed on
    const { mqtt } = this.props;
    mqtt.publish('cleverCup/threshold', '{"lower":' + this.state.min + ', "upper":' + this.state.max + '}');
    //console.log(this.props.data)
}  

onMinChange = (e) => {
  const min = parseFloat(e.target.value)
  this.setState(() => ({ min }))
};

onMaxChange = (e) => {
  const max = parseFloat(e.target.value)
  this.setState(() => ({ max }))
};

  render() {
    return (
      <div>
      <h1>Comfort temperature</h1>
      <input onChange={this.onMinChange} type="text" placeholder='Min temperature' />
      <input onChange={this.onMaxChange} type="text" placeholder='Max temperature' />
      <button onClick={this.setThreshold.bind(this)}>Set range</button>
      </div>
    )
  }
}

export default subscribe({
  topic: 'cleverCup/location/response'
})(Range)
