import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dotenv from 'dotenv';
import { Provider } from 'mobx-react';
import * as serviceWorker from '@src/serviceWorker';
import store from '@store/index';
dotenv.config();

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
