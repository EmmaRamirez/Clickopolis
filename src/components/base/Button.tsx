import * as React from 'react';

interface ButtonProps {
  subject: string;
  css: object;
  clickEvent: () => void;
}

export class Button extends React.Component<ButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='button' aria-role='button'>

      </div>
    )
  }
}
