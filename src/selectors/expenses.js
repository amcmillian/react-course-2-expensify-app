import moment from 'moment';

// Set visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdOn);
        // const startDateMatch = (typeof startDate !== 'number') || (expense.createdOn >= startDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        // const endDateMatch = (typeof endDate !== 'number') || (expense.createdOn <= endDate);
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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