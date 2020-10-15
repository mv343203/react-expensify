import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboard';

test ('should render ExpenseDashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
  
});