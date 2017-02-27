import * as React from 'react';


interface ResourceBlockProps {
  name?: string;
}

export class ResourceBlock extends React.Component<ResourceBlockProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { name } = this.props;
    return (
      <div className='resource-block'>
        <div>{ name }</div>
      </div>
    )
  }
}
