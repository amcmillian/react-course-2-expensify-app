import React from 'react';
import {shallow} from 'enzyme';
import ExpenseSummary from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should match expense summary snapshot for fixture expenses', () => {
    const wrapper = <ExpenseSummary expenses={expenses} />;
    expect(wrapper).toMatchSnapshot();
});

test('should match expense summary snapshot for 0 expenses', () => {
    const wrapper = <ExpenseSummary expenses={[]} />;
    expect(wrapper).toMatchSnapshot();
});

test('should match expense summary snapshot for 1 expense', () => {
    const wrapper = <ExpenseSummary expenses={expenses[0]} />;
    expect(wrapper).toMatchSnapshot();
});