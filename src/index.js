import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { SocketProvider } from 'socket.io-react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');
socket.on('messages', msg => console.log(msg));

ReactDOM.render(
  <SocketProvider socket={socket}>
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
  </SocketProvider >,document.getElementById('root')
);
registerServiceWorker();
