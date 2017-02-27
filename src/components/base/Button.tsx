import * as React from 'react';

interface ButtonProps {
  subject?: string;
  css?: object;
  clickEvent?: () => void;
}

export class Button extends React.Component<ButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div className='button' aria-role='button'>
        { children }
      </div>
    )
  }
}
