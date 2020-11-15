import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFitlers correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFitlers w alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

// ASSERT SOMETHING ABOUT THE SPIES
// should handle text change
// should sort by date
// should sort by amount
// should handle date changes

// ASSERT SOMETHING ABOUT THE STATE
// should handle date focus changes

test('should handle text change', () => {
    const testValue = "this is a test";
    wrapper.find('input').simulate('change',{
        target: {
            value: testValue
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(testValue);
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change',{
        target: {
            value: "date"
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change',{
        target: {
            value: "amount"
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(4, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const focused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toEqual(focused);
})