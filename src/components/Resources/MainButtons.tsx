import * as React from 'react';
import { Button } from '../base';

interface MainButtonsProps {
  amount?: number;
  onFoodButtonClick: (amount:number) => any;
}

const styles = {
  button: {
    background: 'white',
    margin: '.25rem',
  },
  buttonImage: {
    height: '1rem',
  }
};

export class MainButtons extends React.Component<MainButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  public render():JSX.Element {
    return (
      <div className='main-button-wrapper'>
        <Button subject='resources'>
          <img style={styles.buttonImage} src='img/food.png' /> Grow Food
        </Button>
        <div>{ this.props.amount }</div>
        <Button subject='resources' className='prod-button'>
          <img src='img/prod.png' style={styles.buttonImage} /> Create Production
        </Button>
      </div>
    );
  }
}
