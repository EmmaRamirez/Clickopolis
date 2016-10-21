/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';

import { capitalize } from '../../utilities';

export class Root extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {capitalize('hi!')}
      </div>
    )
  }
}

export default Root;
