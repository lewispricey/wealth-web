import React from "react";
import NavButton from "../molecules/NavButton";

const NavBar = () => {
  return (
    <div>
      <NavButton text="Add Transaction" />
      <NavButton text="Manage Accounts" />
      <NavButton text="View Reports" />
    </div>
  );
};

export default NavBar;
