import React, { useState } from "react";
import NavBar from "../components/organisms/NavBar";
import AccountsBlock from "../components/templates/AccountsBlock";
import OverviewBlock from "../components/templates/OverviewBlock";
import TransactionsBlock from "../components/templates/TransactionsBlock";

const Home = () => {
  return (
    <div>
      <NavBar />
      <OverviewBlock />
      <AccountsBlock />
      <TransactionsBlock />
    </div>
  );
};

export default Home;
