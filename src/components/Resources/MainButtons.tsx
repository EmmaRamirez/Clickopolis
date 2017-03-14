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

export class MainButtons extends React.Component<{}, {}> {
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
        <Button subject='resources' className='prod-button'>
          <img src='img/prod.png' style={styles.buttonImage} /> Create Production
        </Button>
      </div>
    );
  }
}
