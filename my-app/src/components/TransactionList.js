import React from "react";

export const TransactionList = () => {
  return (
    <>
      <h4>History</h4>
      <ul class="list">
        <li className="minus">
          Cash <span>-£500</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
