import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
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