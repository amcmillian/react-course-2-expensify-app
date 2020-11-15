import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdOn}) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{amount} - {createdOn}</p>
    </div>
);

export default ExpenseListItem;