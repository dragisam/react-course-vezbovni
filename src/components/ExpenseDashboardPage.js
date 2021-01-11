import React from 'react';
import ExpenceList from './ExpenceList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenceList />
  </div>
);

export default ExpenseDashboardPage;
