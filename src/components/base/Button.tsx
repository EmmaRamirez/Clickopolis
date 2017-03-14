import * as React from 'react';

interface ButtonProps {
  subject?: string;
  styles?: object;
  enableEnterActivation?: boolean;
  onClick?: () => void;
  className?: string;
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
    const { children, onClick, className, styles } = this.props;
    return (
      <div onClick={onClick} style={{...baseButtonStyles, ...styles}} className={`button ${className || ''}`}>
        { children }
      </div>
    )
  }
}
