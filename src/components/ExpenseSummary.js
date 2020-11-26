import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total.js';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';

const ExpenseSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    const formattedExpenses = numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00');
    return (
        <div>
            <h3>
                Viewing {props.expenses.length} {expenseWord} totalling {formattedExpenses}
            </h3>    
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);