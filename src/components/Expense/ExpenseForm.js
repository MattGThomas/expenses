import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import "./expense.css";
const ExpenseForm = (props) => {
  return (
    <div>
      <form>
        <MDBInput
          label="New Expense"
          type="text"
          name="new_expense_name"
          value={props.new_expense_name}
          onChange={props.changeHandler}
        />
        <MDBInput
          label="Price"
          type="number"
          name="new_expense_price"
          value={props.new_expense_price}
          onChange={props.changeHandler}
        />
        <div>
          <span>Type:</span>
          <select
            onChange={props.selectChangeHandler}
            value={props.new_expense_type}
          >
            <option defaultValue="">-Please select a value-</option>
            <option value="Housing">Housing</option>
            <option value="Transportation">Transportation</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Clothing">Clothing</option>
            <option value="Medical">Medical</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Insurance">Insurance</option>
            <option value="Household">Household</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
        <MDBBtn onClick={props.addNewExpense}>Add New Expense</MDBBtn>
      </form>
    </div>
  );
};

export default ExpenseForm;
