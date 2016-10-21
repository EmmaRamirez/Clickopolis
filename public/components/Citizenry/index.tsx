/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';

export class Citizenry extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render():React.ReactElement<{}> {
    return (
      <div>
        Hi!
      </div>
    )
  }
}

export default Citizenry;
