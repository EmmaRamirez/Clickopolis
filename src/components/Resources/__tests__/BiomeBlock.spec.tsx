import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { BiomeBlock } from '../BiomeBlock';

describe('Biome Block', () => {
  it('should render', () => {
    expect(mount(<BiomeBlock name='Desert' description='Hello' />).find('.biome-name').length).toBe(1);
  });
});
