import * as React from 'react';
import { Button } from '../base';

interface MainButtonsProps {
  onFoodButtonClick: (amount:number) => any;
  onProdButtonClick: (amount:number) => any;
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

interface ComponentContext {
  store: Store<any>;
}

function StoreContext (target: any) {
  target.contextTypes = target.contextTypes || {};
  target.contextTypes.store = React.PropTypes.object.isRequired;
}

@StoreContext
export class MainButtons extends React.Component<MainButtonProps, {}> {
  constructor(props, context) {
    super(props, context);
  }

  context: ComponentContext;

  private componentWillReceiveProps() {
    this.forceUpdate();
  }

  public render():JSX.Element {
    return (
      <div className='main-button-wrapper'>
        <Button subject='resources' style={styles.button} className='food-button' onClick={ this.props.onFoodButtonClick }>
          <img style={styles.buttonImage} src='img/food.png' /> Grow Food
        </Button>
        <Button subject='resources' style={styles.button} className='prod-button' onClick={ this.props.onProdButtonClick }>
          <img src='img/prod.png' style={styles.buttonImage} /> Create Production
        </Button>
      </div>
    );
  }
}
