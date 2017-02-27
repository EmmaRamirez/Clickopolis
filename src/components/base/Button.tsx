import * as React from 'react';

interface ButtonProps {
  subject?: string;
  styles?: object;
  enableEnterActivation?: boolean;
  onClick?: () => void;
}

const baseButtonStyles = {
  border: '1px solid #eee',
  borderRadius: '4px',
  padding: '.5rem',
};

export class Button extends React.Component<ButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { children } = this.props;
    return (
      <div onClick={this.props.onClick} style={baseButtonStyles} className='button' aria-role='button'>
        { children }
      </div>
    )
  }
}
