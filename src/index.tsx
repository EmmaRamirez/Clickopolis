import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './components/Root';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { appReducers } from './reducers';
import * as createLogger from 'redux-logger';

const logger = createLogger();

const store = createStore(
  appReducers,
  applyMiddleware(logger)
);

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  mountNode
);
