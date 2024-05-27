import React, { useState } from "react";
import SubHeading from "../atoms/SubHeading";

const OverviewBlock = () => {
  const [monthTotals, setMonthTotals] = useState({ in: 0, out: 0 });

  return (
    <div>
      <SubHeading text="Month Overview" />
      <p>In: £{monthTotals.in}</p>
      <p>Out: £{monthTotals.out}</p>
    </div>
  );
};

export default OverviewBlock;
