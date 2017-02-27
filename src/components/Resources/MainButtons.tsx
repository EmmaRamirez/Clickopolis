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
          <img src='assets/images/food.png' /> Grow Food
        </Button>
        <Button subject='resources'>
          Prod
        </Button>
      </div>
    );
  }
}
