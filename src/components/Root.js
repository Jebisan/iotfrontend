import React from 'react';
import { Connector } from 'mqtt-react';
import Location from './Location';
 
export default () => (
  <div>
    <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt">
      <div>
      <Location/>
      </div>
    </Connector>
  </div>
);