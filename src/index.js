import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
