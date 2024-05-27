import React, { useState, useEffect } from "react";
import SubHeading from "../atoms/SubHeading";
import getMonthTotals from "../../hooks/getMonthTotals";

const OverviewBlock = () => {
  const [monthTotals, setMonthTotals] = useState({
    total_income: 0,
    total_outgoings: 0,
    total_balance: 0,
  });

  useEffect(() => {
    getMonthTotals().then(({ overview }) => {
      setMonthTotals({
        total_income: overview["total_income"],
        total_outgoings: overview["total_outgoings"],
        total_balance: overview["total_balance"],
      });
    });
  }, []);

  return (
    <div>
      <SubHeading text="Month Overview" />
      <p>In: {monthTotals.total_income}</p>
      <p>Out: {monthTotals.total_outgoings}</p>
      <p>Balance: {monthTotals.total_balance}</p>
    </div>
  );
};

export default OverviewBlock;
