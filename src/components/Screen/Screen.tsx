import * as React from 'react';

export class Screen<S> extends React.PureComponent<P, S> {
  protected subject: string;

  protected componentWillReceiveProps() {
    this.forceUpdate();
  }

  protected renderScreen(): React.ReactNode {
    return undefined;
  }

  public render() {
    return (
      <section className={`section ${subject}`}>
        { this.renderScreen() }
      </section>
    )
  }
}
