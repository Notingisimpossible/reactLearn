import React from 'react';
import ReactDOM from 'react-dom';
import {Globalstyle} from './style'
import {IconGlobalstyle} from './static/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <div>
    <IconGlobalstyle />
    <Globalstyle />
    <App />
  </div>,
  document.getElementById('root')
);
