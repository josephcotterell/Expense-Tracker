import React, { Component } from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className="minus">
      {transaction.text}{" "}
      <span>
        {sign}${Maths.abs(transaction.amount)}
      </span>
      <button class="delete-btn">x</button>
    </li>
  );
};
