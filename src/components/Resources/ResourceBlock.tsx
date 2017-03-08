import * as React from 'react';
import { Partial } from '../../utils';
import { IResource } from '../../classes';

type ResourceBlockProps = Partial<IResource>;

export class ResourceBlock extends React.Component<ResourceBlockProps, {}> {
  constructor(props) {
    super(props);
  }

  public render():JSX.Element {
    const { name } = this.props;
    return (
      <div className='resource-block'>
        <div>{ name }</div>
      </div>
    )
  }
}
