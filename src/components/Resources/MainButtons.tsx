import * as React from 'react';
import { Button } from '../base';

export class MainButtons extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className='main-button-wrappers'>
        <Button subject='resources'>
          Food
        </Button>
        <Button subject='resources'>
          Prod
        </Button>
      </div>
    );
  }
}
