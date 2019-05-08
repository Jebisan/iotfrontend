import React from 'react';
import { subscribe } from 'mqtt-react';
import DashboardPage from './DashboardPage';

export class PostMessage extends React.Component {

  state = {
    min: undefined,
    max: undefined
  };
  
  sendMessage(e) {
      e.preventDefault();
      //MQTT client is passed on
      const { mqtt } = this.props;
      mqtt.publish('cleverCup/location', 'Get location');
      //console.log(this.props.data)
  }  

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

getState = () => {
  console.log(this.state);
}
   
  render() {
    return (
      <div>
      
      <input onChange={this.onMinChange} type="text" placeholder='Min temperature' />
      <input onChange={this.onMaxChange} type="text" placeholder='Max temperature' />
      <button onClick={this.setThreshold.bind(this)}>Set threshold</button>
    <DashboardPage location={this.props.data} />
    <br/>
    <button onClick={this.sendMessage.bind(this)}>Get location</button>
      </div>
    );
  }
}
 
export default subscribe({
  topic: 'cleverCup/location/response'
})(PostMessage)
