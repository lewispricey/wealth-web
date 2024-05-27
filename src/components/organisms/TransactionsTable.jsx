import React from "react";

const TransactionsTable = () => {
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
        <tr>
          <td>Side Hustle</td>
          <td>Salary</td>
          <td>Current Account</td>
          <td>2021-06-01</td>
          <td>In</td>
          <td>2000</td>
        </tr>
      </table>
    </div>
  );
};

export default TransactionsTable;
