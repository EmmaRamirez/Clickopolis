import * as React from 'react';
import * as PureRender from 'pure-render-decorator';
import { Store } from 'redux';

interface ScreenProps {
  isFocused?: boolean;
}

const styles = {
  screen: {
    border: '1px solid #333',
    borderRadius: '4px',
    padding: '1rem',
  },
  header: {},
  heading: {
    fontSize: '1.3rem',
    textAlign: 'center',
  },
  headingImage: {
    height: '1rem',
    marginRight: '.25rem',
  }
};

interface ScreenContext {
  store: Store<any>;
}

function StoreContext (target: any) {
  target.contextTypes = target.contextTypes || {};
  target.contextTypes.store = React.PropTypes.object.isRequired;
}

@StoreContext
export class Screen<P, S> extends React.Component<P, S> {
  constructor(P, context) {
    super(P, context);
  }

  protected context: ScreenContext;
  protected subject: string;

  protected componentWillReceiveProps() {
    this.forceUpdate();
  }

  protected renderScreen(): React.ReactNode {
    return undefined;
  }

  public render() {
    return (
      <section style={styles.screen} className={`section ${this.subject}`}>
        <div className='screen-header'>
          <h3 style={styles.heading}>
            <img style={styles.headingImage} src={`img/${this.subject}.png`} />
            { this.subject.toUpperCase() }
          </h3>
        </div>
        { this.renderScreen() }
      </section>
    )
  }
}
