import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <img className="marker" src="/images/marker.png" />;

export class DashboardPage extends Component {
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
    if (nextProps.location[0] !== undefined) {
      let obj = String(nextProps.location[nextProps.location.length - 1]);
      var lat = parseFloat(obj.slice(8, 16));
      var lng = parseFloat(obj.slice(25, 33));
      this.setState(prevState => ({ ...prevState,  lat, lng}));
    }
  }

  

  getState = () => {
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <div style={{ height: '75vh', width: '75%' }}>
          <br />
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAEkzhcBPPaq0AZ6-Xr-ME8J6ux2eN1Yq0' }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
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

export default DashboardPage
