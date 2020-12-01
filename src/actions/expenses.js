import { database } from 'firebase';
import uuid from 'uuid';
import db from '../firebase/firebase';

/*
Without DB...
Component calls Action Generator
Action Generator returns Object
Component dispatches Object
Redux Store changes

With DB...
Component calls Action Generator
Action Generator returns Function
Component dispatches Function
Function runs (has the ability to dispatch other Actions)
*/


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdOn = 0
        } = expenseData;
        const expense = {description, note, amount, createdOn};
        return db.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({id}) => ({
type: 'REMOVE_EXPENSE',
id
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
})