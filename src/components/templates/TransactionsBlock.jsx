import React from "react";
import SubHeading from "../atoms/SubHeading";
import TransactionsTable from "../organisms/TransactionsTable";

const TransactionsBlock = () => {
  return (
    <div>
      <SubHeading text="Recent Transactions" />
      <TransactionsTable />
    </div>
  );
};

export default TransactionsBlock;
