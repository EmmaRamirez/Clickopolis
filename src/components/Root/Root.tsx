import * as React from 'react';
import { Resources } from './Resources';



export class Root extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div class='clickopolis'>
        <Resources />
      </div>
    );
  }
}
