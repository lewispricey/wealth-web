import React from "react";
import AddIcon from "../atoms/icons/AddIcon";
import AccountsIcon from "../atoms/icons/AccountsIcon";
import ReportsIcon from "../atoms/icons/ReportsIcon";

const NavButton = ({ type }) => {
  const types = {
    add: {
      text: "Add Transaction",
      icon: <AddIcon />,
    },
    accounts: {
      text: "Manage Accounts",
      icon: <AccountsIcon />,
    },
    reports: {
      text: "View Reports",
      icon: <ReportsIcon />,
    },
  };

  return (
    <button>
      {types[type].icon}
      <p>{types[type].text}</p>
    </button>
  );
};
export default NavButton;
