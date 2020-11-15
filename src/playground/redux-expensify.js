import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
        {
            description = '',
            note = '',
            amount = 0,
            createdOn = 0
        } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdOn
    }
})

// REMOVE_EXPENSE
const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    IdToRemove: id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SORT_BY_AMOUNT
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch( action.type ) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => (action.IdToRemove !== expense.id));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

// Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// Timestamps
// count in milliseconds
// 0 = Jan 1st, 1970

// Set visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = (typeof startDate !== 'number') || (expense.createdOn >= startDate);
        // console.log(startDateMatch);
        const endDateMatch = (typeof endDate !== 'number') || (expense.createdOn <= endDate);
        // console.log(endDateMatch);
        const textMatch = (typeof text !== 'string') || (expense.description.toLowerCase().includes(text.toLowerCase()));
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy == 'date') {
            return a.createdOn < b.createdOn ? 1 : -1;
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expOne = store.dispatch(addExpense({description: 'Rent', amount: 1100, createdOn: -1000}));
const expTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdOn: 1000}));

console.log('analyze below');
// store.dispatch(setTextFilter('rent'));
// store.dispatch(removeExpense({id: expOne.expense.id}));
// store.dispatch(editExpense(expTwo.expense.id, {amount: 500}));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'alskdfja',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdOn: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};