import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h3>Income</h3>
        <p class="money plus">{income}</p>
      </div>
      <div>
        <h3>Expense</h3>
        <p class="money minus">{expense}</p>
      </div>
    </div>
  );
};
