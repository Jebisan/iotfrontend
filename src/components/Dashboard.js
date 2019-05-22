import React, { Component } from 'react';
import axios from 'axios';
import { XYPlot, LineSeries } from 'react-vis';
import moment from 'moment';



export class Dashboard extends Component {
  state = {
  };

  getState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>Welcome to your CleverCup self-service!</p>
      </div>
    )
  }
}

export default Dashboard
