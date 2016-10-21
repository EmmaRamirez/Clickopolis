import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from './components/Root';

const mountNode = document.getElementById('mount-node');

ReactDOM.render(
  <Root />,
  mountNode
);
