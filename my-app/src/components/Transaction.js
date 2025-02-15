import React, { Component } from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}£{Math.abs(transaction.amount)}
      </span>
      <button class="delete-btn">x</button>
    </li>
  );
};
