import * as React from 'react';
import { Button } from '../base';


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

  public render() {
    return (
      <div className='main-button-wrappers'>
        <Button subject='resources' className='food-button'>
          <img src='img/food.png' style={styles.buttonImage} /> Grow Food
        </Button>
        <Button subject='resources' className='prod-button'>
          <img src='img/prod.png' style={styles.buttonImage} /> Create Production
        </Button>
      </div>
    );
  }
}
