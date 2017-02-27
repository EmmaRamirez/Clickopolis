import * as React from 'react';

interface ScreenProps {
  isFocused?: boolean;
}

const screenStyles = {
  border: '1px solid #333',
  borderRadius: '4px',
  padding: '1rem',
};

export class Screen<P, S> extends React.PureComponent<P, S> {
  protected subject: string;

  protected componentWillReceiveProps() {
    this.forceUpdate();
  }

  protected renderScreen(): React.ReactNode {
    return undefined;
  }

  public render() {
    return (
      <section style={screenStyles} className={`section ${this.subject}`}>
        <div className='screen-header'>
          <h3>{ this.subject }</h3>
        </div>
        { this.renderScreen() }
      </section>
    )
  }
}
