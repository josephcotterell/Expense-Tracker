import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h4>History</h4>
      <ul class="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transactioan.text} <span>-£500</span>
            <button class="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};
