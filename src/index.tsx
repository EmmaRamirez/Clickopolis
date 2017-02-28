import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './components/Root';
import { Provider } from 'react-redux';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  mountNode
);
