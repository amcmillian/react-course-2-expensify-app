import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createdOn}) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>
        {numeral(amount/100).format('$0,0.00')}
        -
        {moment(createdOn).format('MMMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;