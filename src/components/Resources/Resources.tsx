import * as React from 'react';
import { Screen } from '../Screen';
import { MainButtons } from './MainButtons';
import { ResourceBlock } from './ResourceBlock';

interface ResourcesProps {
  resources:any;
}

export class Resources extends Screen<ResourcesProps, {}> {
  subject = 'resources';


  private renderResourceBlocks(resources) {
    return resources.map((item, index) => {
      return <ResourceBlock name={item.name} key={index} />
    });
  }

  public renderScreen() {
    return (
      <div className='screen-inner'>
        <MainButtons />
        { this.renderResourceBlocks(this.props.resources) }
      </div>
    )
  }
}
