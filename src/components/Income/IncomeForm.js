import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";

const IncomeForm = (props) => {
  return (
    <form>
      <MDBInput
        label="Income Source"
        type="text"
        onChange={props.changeHandler}
        value={props.income_source}
        name="income_source"
      />
      <MDBInput
        label="Income Amount"
        type="number"
        onChange={props.changeHandler}
        name="income_amount"
        value={props.income_amount}
      />
      <MDBBtn onClick={props.addNewIncome}>Add Income</MDBBtn>
    </form>
  );
};

export default IncomeForm;
