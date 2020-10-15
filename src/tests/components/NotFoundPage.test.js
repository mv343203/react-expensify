import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFoundPage from '../../components/NotFoundPage';

test ('should render NotFoundPAge correctly', () => {
    const wrapper = shallow(<NotFoundPage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
  
});