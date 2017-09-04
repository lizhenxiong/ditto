import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

require('./assets/index.less');

ReactDOM.render(
    <App />
	, document.querySelector('.container'));
