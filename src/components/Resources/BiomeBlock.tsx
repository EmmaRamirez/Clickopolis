import * as React from 'react';
import { IBiome } from '../../classes';
import { Partial } from '../../utils';

type BiomeBlockProps = Partial<IBiome>;

export class BiomeBlock extends React.Component<BiomeBlockProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { name, description } = this.props;
    return (
      <div className='biome-block'>
        <div className='biome-name'>{ name }</div>
      </div>
    )
  }
}
