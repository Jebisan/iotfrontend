import React from 'react';
import { subscribe } from 'mqtt-react';
import DashboardPage from './DashboardPage';

export class PostMessage extends React.Component {
  
  sendMessage(e) {
      e.preventDefault();
      //MQTT client is passed on
      const { mqtt } = this.props;
      mqtt.publish('cleverCup/location', 'Get location');
      //console.log(this.props.data)
  }  
   
  render() {
    return (
      <div>
      <button onClick={this.sendMessage.bind(this)}>Get location</button>
    <DashboardPage location={this.props.data} />
      </div>
    );
  }
}
 
export default subscribe({
  topic: 'cleverCup/location/response'
})(PostMessage)
