import React from "react";
import Expense from "./Expense.js";

const ExpenseList = (props) => {
  return (
    <div>
      <h2>Expenses:</h2>
      <div>
        {props.expenses.map((expense) => (
          <Expense
            key={expense.id}
            expense={expense}
            // deleteExpense={props.deleteExpense}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
