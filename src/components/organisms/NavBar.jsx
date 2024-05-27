import React from "react";
import NavButton from "../molecules/NavButton";

const NavBar = () => {
  return (
    <div>
      <NavButton type="add" />
      <NavButton type="accounts" />
      <NavButton type="reports" />
    </div>
  );
};

export default NavBar;
