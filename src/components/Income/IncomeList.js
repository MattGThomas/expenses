import React from "react";
import Income from "./Income.js";

const IncomeList = (props) => {
  return (
    <div>
      <h2>Income:</h2>
      <div>
        {props.income.map((income) => (
          <Income key={income.id} income={income} />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
