import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { subscribe } from 'mqtt-react';


const AnyReactComponent = () => <img className="marker" src="/images/marker.png" />;

export class DashboardPage extends Component {
  state = {
    center: {
      lat: 55.371210,
      lng: 10.429230,
    },
    zoom: 16,
    min: undefined,
    max: undefined
  };

  componentWillReceiveProps(){
    console.log(this.props.location)
  }
  
  bin2String(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
  }
  
  messageList = (props) => (
    <ul>
      {props.data.map( message => <li>{message}</li> )}
    </ul>
  );

  onMinChange = (e) => {
    const min = e.target.value
    this.setState(() => ({min}))
  };

  onMaxChange = (e) => {
    const max = e.target.value
    this.setState(() => ({max}))
  };
  
  setRange = () => {
    console.log('min:',this.state.min,'max:', this.state.max)
  }

  

  render() {
    return (
      <div>
      <input onChange={this.onMinChange} type="text" placeholder='Min temperature'/>
      <input onChange={this.onMaxChange} type="text" placeholder='Max temperature'/>
      <button onClick = {this.setRange} >Set range</button>
      <div style={{ height: '75vh', width: '75%' }}>
      <br/>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAEkzhcBPPaq0AZ6-Xr-ME8J6ux2eN1Yq0' }}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >
        <AnyReactComponent
          lat={this.state.center.lat}
          lng={this.state.center.lng}
        />
      </GoogleMapReact>
    </div>
    </div>
    )
  }
}

export default DashboardPage
