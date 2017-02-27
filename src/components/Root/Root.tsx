import * as React from 'react';
import { Resources } from '../Resources';
import { resources } from '../../data/resource';


export class Root extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className='clickopolis'>
        <Resources resources={resources} />
      </div>
    );
  }
}
