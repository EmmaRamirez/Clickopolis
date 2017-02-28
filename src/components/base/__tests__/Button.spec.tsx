import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { Button } from '../Button';

describe('Button', () => {
  it('should render', () => {
    expect(mount(<Button><div className='findMe'></div></Button>).find('.findMe').length).toBe(1);
  });

  xit('should render children when passed in', () => {
    const wrapper = shallow(
      <Button>
        <div className='unqiue' />
      </Button>
    );
    expect(wrapper.contains(<div className='unique' />)).toBe(true);
  });
});
