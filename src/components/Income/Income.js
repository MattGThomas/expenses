import React from "react";
import { MDBIcon } from "mdbreact";
import "./income.css";

const Income = (props) => {
  return (
    <div className="income">
      <div>
        {" "}
        {props.income.source}: ${props.income.amount}
      </div>
      <span>
        <MDBIcon
          icon="trash-alt"
          //   onClick={props.deleteExpense(props.expense.id)}
        />
      </span>
    </div>
  );
};

export default Income;
