import * as React from 'react';
import { Screen } from '../Screen';
import { ResourceBlock } from './ResourceBlock';
import { IResource } from '../../classes';
import { BiomeBlock } from './BiomeBlock';
import { MainButtons } from './MainButtons';
import { IBiome } from '../../classes';
import { styles } from '../base/styles';
import { clickFoodButton } from '../../actions';

//require('./styles/resources.styl');

interface ResourcesProps {
  biomes: IBiome[];
  resources: IResource[];
}

interface ResourcesState {
  selectedResource: string;
}

export class Resources extends Screen<ResourcesProps, ResourcesState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedResources: 'stone',
    };
  }
  subject = 'resources';

  private renderBiomeBlocks(biomes:IBiome[]):JSX.Element[] {
    return biomes.map((item, index) => {
      return <BiomeBlock name={item.name} key={index} />
    });
  }

  private renderResourceBlocks(resources):JSX.Element[] {
    return resources.map((item, index) => {
      return <ResourceBlock name={item.name} key={index} onClick={ () => this.setState({
        selectedResource: item.name,
      })} />
    });
  }

  public renderScreen():JSX.Element {
    return (
      <div className='screen-inner'>
        <MainButtons
          onFoodButtonClick={ () => this.context.store.dispatch(clickFoodButton(1))}
        />
        { this.renderBiomeBlocks(this.props.biomes) }
        { this.renderResourceBlocks(this.props.resources) }
        { this.state.selectedResource }
      </div>
    )
  }
}
