import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { DatePicker } from 'antd';

require('font-awesome-webpack');
require('./assets/less/index.less');

ReactDOM.render(
    <App />
    , document.querySelector('.container'));
ReactDOM.render(<DatePicker />, document.getElementById('abc'));
