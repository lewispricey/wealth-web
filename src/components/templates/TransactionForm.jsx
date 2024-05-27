import React, { useState, useEffect } from "react";
import SubHeading from "../atoms/SubHeading";
import getCategories from "../../hooks/getCategories";
import getAccounts from "../../hooks/getAccounts";

const TransactionForm = () => {
  const [categories, setCategories] = useState([]);
  const [accounts, setAccounts] = useState([]);

  const [formData, setFormData] = useState({
    description: "",
    category: "",
    account: "",
    date: "",
    type: "",
    amount: "",
  });

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.categories);
    });
    getAccounts().then((data) => {
      setAccounts(data.accounts);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <SubHeading text="Transaction Form" />
      <form>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          onChange={handleChange}
          value={formData.description}
          required={true}
        />

        <label htmlFor="category">Category:</label>
        <select name="category" id="category" onChange={handleChange}>
          {categories.map(({ id, name }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>

        <label htmlFor="account">Account:</label>
        <select name="account" id="account" onChange={handleChange}>
          {accounts.map(({ id, name }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" required={true} onChange={handleChange} />

        <label htmlFor="type">Type:</label>
        <select id="type" required={true} onChange={handleChange}>
          <option value="Out">Out</option>
          <option value="In">In</option>
        </select>

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          required={true}
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};
export default TransactionForm;
