import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total.js';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';

const ExpenseSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    const formattedExpenses = numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{formattedExpenses}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>  
            </div>  
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);