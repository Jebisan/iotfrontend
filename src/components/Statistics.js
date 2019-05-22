import React, { Component } from 'react';
import axios from 'axios';
import { XYPlot, LineSeries } from 'react-vis';
import moment from 'moment';



export class Statistics extends Component {
  state = {
  };

  componentDidMount() {
   /* axios.get(`http://89d2557f.ngrok.io/drinking-data`).then(res => {
      const firstEntry = moment(res.data[0].timestamp).unix();
      const lastEntry = moment(res.data[res.data.length-1].timestamp).unix();
      console.log(firstEntry, lastEntry)

      res.data.forEach(element => {
       
      });
    })*/
  }

  getState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Statistics</h1>
        <img src="/images/Alcohol-graph.png" className="graph"  alt=""/>
      </div>
    )
  }
}

export default Statistics
