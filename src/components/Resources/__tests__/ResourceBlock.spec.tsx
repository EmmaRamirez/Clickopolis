import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { ResourceBlock } from '../ResourceBlock';

describe('ResourceBlock', () => {
  it('should have a class of resource-block', () => {
    const wrapper = shallow(<ResourceBlock name='Wood' />);
    expect(wrapper.is('.resource-block')).toBe(true);
  });
})
