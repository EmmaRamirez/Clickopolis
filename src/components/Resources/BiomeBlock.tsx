import * as React from 'react';
import { IBiome } from '../../classes';
import { Partial } from '../../utils';

type BiomeBlockProps = Partial<IBiome>;

const imgHeight = { height: '1rem' };

export class BiomeBlock extends React.Component<BiomeBlockProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { name, description } = this.props;
    return (
      <div className='biome-block'>
        <div className='biome-name'>
          <img style={imgHeight} src={`img/${name}.png`} />
          { name }
        </div>
      </div>
    )
  }
}
