import * as React from 'react';

interface ScreenProps {
  isFocused?: boolean;
}

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
      <section className={`section ${this.subject}`}>
        { this.renderScreen() }
      </section>
    )
  }
}
