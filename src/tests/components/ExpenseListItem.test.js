import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';


test('should render ExpenseListItem with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});