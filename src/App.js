import React, { Component } from "react";

import ExpenseForm from "./components/Expense/ExpenseForm.js";
import Expense from "./components/Expense/Expense.js";
import Income from "./components/Income/Income.js";
import IncomeForm from "./components/Income/IncomeForm.js";
import PieChart from "./components/PieChart/PieChart.js";

import { MDBCard, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "./App.css";

class App extends Component {
  state = {
    expenses: [
      { id: 1, name: "hulu", price: 928.3, type: "Transportation" },
      { id: 2, name: "netflix", price: 3.54, type: "Food" },
      { id: 3, name: "groceries", price: 10.23, type: "Utilities" },
      { id: 4, name: "test", price: 134, type: "Medical" },
    ],
    new_expense_name: "",
    new_expense_price: 0,
    new_expense_type: "",

    income: [
      { id: 1, source: "work", amount: 2000 },
      { id: 2, source: "freelance", amount: 1200 },
      { id: 3, source: "test", amount: 3201 },
      { id: 4, source: "test1", amount: 9203 },
    ],
    income_source: "",
    income_amount: 0,

    income_current_page: 1,
    expense_current_page: 1,
    items_per_page: 3,
  };

  changeHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  selectChangeHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      new_expense_type: evt.target.value,
    });
  };

  addNewExpense = () => {
    let new_expense = {
      id: Math.random() * 1234 + 1234,
      name: this.state.new_expense_name,
      price: Number(this.state.new_expense_price),
      type: this.state.new_expense_type,
    };
    if (
      !this.state.new_expense_name ||
      this.state.new_expense_price === 0 ||
      !this.state.new_expense_type
    ) {
      alert("Please enter all values");
      return;
    }
    let { expenses } = this.state;
    expenses = [...expenses, new_expense];
    this.setState({
      expenses,
      new_expense_name: "",
      new_expense_price: "",
    });
  };

  addNewIncome = () => {
    let new_income = {
      id: Math.random() * 12345 + 12345,
      source: this.state.income_source,
      amount: Number(this.state.income_amount),
    };
    if (this.state.income_source || this.state.income_amount === 0) {
      alert("Please enter all values");
      return;
    }

    let { income } = this.state;
    income = [...income, new_income];
    this.setState({
      income,
      income_source: "",
      income_amount: "",
    });
  };
  expensesTotal = () => {
    let { expenses } = this.state;
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += expenses[i].price;
    }
    return total;
  };

  incomeTotal = () => {
    let { income } = this.state;
    let total = 0;
    for (let i = 0; i < income.length; i++) {
      total += income[i].amount;
    }
    return total;
  };

  netTotal = () => {
    let total = this.incomeTotal() - this.expensesTotal();
    return total;
  };

  incomePageSelector = (evt) => {
    this.setState({ income_current_page: Number(evt.target.id) });
  };
  expensePageSelector = (evt) => {
    this.setState({ expense_current_page: Number(evt.target.id) });
  };
  render() {
    let {
      expenses,
      income,
      income_current_page,
      expense_current_page,
      items_per_page,
    } = this.state;

    const income_last_item = income_current_page * items_per_page;
    const expense_last_item = expense_current_page * items_per_page;

    const income_first_item = income_last_item - items_per_page;
    const expense_first_item = expense_last_item - items_per_page;

    const current_expenses = expenses.slice(
      expense_first_item,
      expense_last_item
    );
    const current_income = income.slice(income_first_item, income_last_item);

    const expenses_page_numbers = [];
    for (let i = 1; i <= Math.ceil(expenses.length / items_per_page); i++) {
      expenses_page_numbers.push(i);
    }
    const display_expenses = current_expenses.map((expense) => {
      return <Expense key={expense.id} expense={expense} id={expense.id} />;
    });
    const display_expense_page_numbers = expenses_page_numbers.map((number) => {
      return (
        <div key={number}>
          <ol key={number} id={number} onClick={this.expensePageSelector}>
            {number}
          </ol>
        </div>
      );
    });

    const income_page_numbers = [];
    for (let i = 1; i <= Math.ceil(income.length / items_per_page); i++) {
      income_page_numbers.push(i);
    }
    const display_income = current_income.map((income) => {
      return <Income key={income.id} income={income} id={income.id} />;
    });
    const display_income_page_numbers = income_page_numbers.map((number) => {
      return (
        <div key={number}>
          <ol key={number} id={number} onClick={this.incomePageSelector}>
            {number}
          </ol>
        </div>
      );
    });

    return (
      <div className="App">
        <h2>Expense Tracker</h2>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <div className="card">
                <MDBCard>
                  <div>
                    {/* <ExpenseList expenses={expenses} /> */}
                    {display_expenses}
                    <div className="enumerate">
                      {display_expense_page_numbers}
                    </div>
                  </div>
                  <p>
                    <strong>Expense Total: ${this.expensesTotal()}</strong>
                  </p>
                  <ExpenseForm
                    addNewExpense={this.addNewExpense}
                    changeHandler={this.changeHandler}
                    selectChangeHandler={this.selectChangeHandler}
                    new_expense_name={this.state.new_expense_name}
                    new_expense_price={this.state.new_expense_price}
                    new_expense_type={this.state.new_expense_type}
                  />
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <div className="card">
                <MDBCard>
                  <div>
                    {/* <IncomeList income={income} /> */}
                    {display_income}
                    <div className="enumerate">
                      {display_income_page_numbers}
                    </div>
                  </div>
                  <p>
                    <strong>Income Total: ${this.incomeTotal()}</strong>
                  </p>
                  <IncomeForm
                    changeHandler={this.changeHandler}
                    income_amount={this.state.income_amount}
                    income_source={this.state.income_source}
                    addNewIncome={this.addNewIncome}
                  />
                </MDBCard>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <PieChart />

        <strong>Net Total: ${this.netTotal()}</strong>
      </div>
    );
  }
}

export default App;
