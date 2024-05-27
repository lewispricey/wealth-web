import React, { useState, useEffect } from "react";
import SubHeading from "../atoms/SubHeading";
import getCategories from "../../hooks/getCategories";

const TransactionForm = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <>
      <SubHeading text="Transaction Form" />
      <form>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" required={true} />

        <label htmlFor="category">Category:</label>
        <select name="category" id="category">
          {categories.map(({ id, name }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>

        <label htmlFor="account">Account:</label>
        <input type="select" id="account" required={true}></input>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" required={true} />

        <label htmlFor="type">Type:</label>
        <select id="type" required={true}>
          <option value="Out">Out</option>
          <option value="In">In</option>
        </select>

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" required={true} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default TransactionForm;
