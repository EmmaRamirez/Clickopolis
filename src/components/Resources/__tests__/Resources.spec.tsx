import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { resources, biomes } from '../../../data';
import { Resources } from '../Resources';


describe('Resources', () => {
  xit('should render', () => {
    expect(mount(<Resources resources={resources} biomes={biomes} />).is('.section')).toBe(true);
  });
});
