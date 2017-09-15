import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopBar from './routing';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TopBar />, document.getElementById('root'));
registerServiceWorker();
