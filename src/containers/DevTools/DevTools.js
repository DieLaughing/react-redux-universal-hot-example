import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-H"
               changePositionKey="ctrl-D"
               changeMonitorKey="ctrl-M">
    <LogMonitor />
    <SliderMonitor />
  </DockMonitor>
);
