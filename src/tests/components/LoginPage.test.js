import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';



test ('should correctly render LoginPage', () =>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    //creates spy
    const startLogin = jest.fn();
    //passes in to login page
    const wrapper = shallow (<LoginPage startLogin = {startLogin} />);
    //this clicks the button
    wrapper.find('button').simulate('click');
    //expects spy to have been called
    expect(startLogin).toHaveBeenCalled();
});