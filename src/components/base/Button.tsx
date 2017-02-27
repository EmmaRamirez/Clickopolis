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
      <div class='button' aria-role='button'>

      </div>
    )
  }
}
