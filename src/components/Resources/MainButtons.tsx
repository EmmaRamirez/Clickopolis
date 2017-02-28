import * as React from 'react';
import { Button } from '../base';

interface MainButtonsProps {
  amount?: number;
  onFoodButtonClick: (amount:number) => any;
}

export class MainButtons extends React.Component<MainButtonsProps, {}> {
  constructor(props) {
    super(props);
  }

  public render():JSX.Element {
    return (
      <div className='main-button-wrapper'>
        <Button subject='resources'>
          <img src='assets/images/food.png' /> Grow Food
          { this.props.amount }
        </Button>
        <Button subject='resources'>
          Prod
        </Button>
      </div>
    );
  }
}
