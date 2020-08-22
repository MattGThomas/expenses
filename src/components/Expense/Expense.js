import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import "./expense.css";

// const Expense = (props) => {
//   // const backgroundColor = (props) => {
//   //   let { type } = this.props;
//   //   if (type === "Housing") {
//   //     return `background: red`;
//   //   }
//   // };
//   return (
//     <div className="expense">
//       <div>
//         {props.expense.name}: ${props.expense.price} {props.expense.type}
//       </div>
//       <span>
//         <MDBIcon
//           icon="trash-alt"
//           //   onClick={props.deleteExpense(props.expense.id)}
//         />
//       </span>
//     </div>
//   );
// };

class Expense extends Component {
  render() {
    const color = () => {
      let type = this.props.expense.type;
      console.log(this.props);
      console.log(type);
      if (type === "Housing") {
        return "red";
      } else if (type === "Transportation") {
        return "blue";
      } else if (type === "Food") {
        return "green";
      } else if (type === "Utilities") {
        return "grey";
      } else if (type === "Clothing") {
        return "yellow";
      } else if (type === "Medical") {
        return "purple";
      } else if (type === "Healthcare") {
        return "pink";
      } else if (type === "Insurance") {
        return "silver";
      }
    };
    return (
      <div className="expense">
        <div style={{ backgroundColor: color() }}>
          {this.props.expense.name}: ${this.props.expense.price}{" "}
          {this.props.expense.type}
        </div>
        <span>
          <MDBIcon icon="trash-alt" />
        </span>
      </div>
    );
  }
}
export default Expense;
