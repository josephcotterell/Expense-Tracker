import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction, transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h4>History</h4>
      <ul class="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
