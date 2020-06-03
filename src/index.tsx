import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import dotenv from 'dotenv';

import App from './App';
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
