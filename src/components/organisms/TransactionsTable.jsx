import React, { useState, useEffect } from "react";
import getTransactions from "../../hooks/getTransactions";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((data) => {
      setTransactions(data.transactions);
    });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Account</th>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
        {transactions.map((transaction, idx) => {
          return (
            <tr key={idx}>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.account_name}</td>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TransactionsTable;
