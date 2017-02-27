import * as React from 'react';
import { Screen } from '../Screen';
import { MainButtons } from './MainButtons';

export class Resources extends Screen<{}> {
  subject = 'resources';


  public renderScreen() {
    return (
      <div className='screen-inner'>
        <MainButtons />
      </div>
    )
  }
}
