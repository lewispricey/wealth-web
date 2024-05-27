import { useState } from "react";
import "./App.css";
import Title from "./components/atoms/Title";
import AccountCard from "./components/molecules/AccountCard";
import TransactionsTable from "./components/organisms/TransactionsTable";

function App() {
  return (
    <>
      <Title />
      <AccountCard />
      <TransactionsTable />
    </>
  );
}

export default App;
