import { useState } from "react";
import "./App.css";
import Title from "./components/atoms/Title";
import Home from "./pages/Home";
import TransactionForm from "./components/templates/TransactionForm";

function App() {
  return (
    <>
      <Title />
      <Home />
      <TransactionForm />
    </>
  );
}

export default App;
