import React from 'react';
import { Connector } from 'mqtt-react';
import MQQT from './MQQT';
import Dashboard from './DashboardPage';
 
export default () => (
  <div>
  <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt">
    <MQQT />
  </Connector>
  </div>
);