import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { Start } from '../Start';

describe('Start', () => {
  it('should have a class of start', () => {
    const wrapper = shallow(<Start />);
    expect(wrapper.is('.start')).toBe(true);
  });
})
