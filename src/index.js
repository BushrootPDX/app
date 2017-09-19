import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopBar from './routing';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <TopBar />
        {/* <App/> */}
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
