import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { Button } from '../Button';

describe('Button', () => {
  it('should render', () => {
    expect(mount(<Button><div className='findMe'></div></Button>).find('.findMe').length).toBe(1);
  });
});
