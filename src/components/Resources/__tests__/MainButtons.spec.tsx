import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { MainButtons } from '../MainButtons';

describe('Main buttons in the game', () => {
  it('should have a class of main-button-wrapper', () => {
    const wrapper = shallow(<MainButtons />);
    expect(wrapper.is('.main-button-wrapper')).toBe(true);
  });
})
