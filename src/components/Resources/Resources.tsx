import * as React from 'react';
import { Screen } from '../Screen';
import { ResourceBlock } from './ResourceBlock';
import { IResource } from '../../classes';
import { BiomeBlock } from './BiomeBlock';
import { MainButtons } from './MainButtons';
import { MainButtonsWrapper } from './MainButtonsWrapper';
import { IBiome } from '../../classes';

//require('css-loader!stylus-loader!./styles/resources.styl');

interface ResourcesProps {
  biomes: IBiome[];
  resources: IResource[];
}

export class Resources extends Screen<ResourcesProps, {}> {
  subject = 'resources';


  private renderBiomeBlocks(biomes:IBiome[]):JSX.Element[] {
    return biomes.map((item, index) => {
      return <BiomeBlock name={item.name} key={index} />
    });
  }

  private renderResourceBlocks(resources):JSX.Element[] {
    return resources.map((item, index) => {
      return <ResourceBlock name={item.name} key={index} />
    });
  }

  public renderScreen():JSX.Element {
    return (
      <div className='screen-inner'>
        <MainButtonsWrapper
          amount={1}
        />
        { this.renderBiomeBlocks(this.props.biomes) }
        { this.renderResourceBlocks(this.props.resources) }
      </div>
    )
  }
}
