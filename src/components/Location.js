import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import { subscribe } from 'mqtt-react';


const AnyReactComponent = () => <img className="marker" src="/images/marker.png" />;

export class Location extends Component {
  state = {
    center: {
      lat: 55.371208,
      lng: 10.429230,
    },
    zoom: 15,
    lat: undefined,
    lng: undefined,
    min: undefined,
    max: undefined
  };  

  componentWillReceiveProps(nextProps) {
    if (nextProps.data[0] !== undefined) {
      let obj = String(nextProps.data[nextProps.data.length - 1]);
      var lat = parseFloat(obj.slice(8, 16));
      var lng = parseFloat(obj.slice(25, 33));
      this.setState(prevState => ({ ...prevState,  lat, lng}));
    }
  }

  getLocation(e) {
    e.preventDefault();
    //MQTT client is passed on
    const { mqtt } = this.props;
    mqtt.publish('cleverCup/location', 'Get location');
}  

  render() {
    return (
      <div>
      <button onClick={this.getLocation.bind(this)}>Get location</button>
        <div style={{ height: '75vh', width: '75%' }}>
          <br />
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAEkzhcBPPaq0AZ6-Xr-ME8J6ux2eN1Yq0' }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}>
            <AnyReactComponent
              lat={this.state.lat}
              lng={this.state.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default subscribe({
  topic: 'cleverCup/location/response'
})(Location)

