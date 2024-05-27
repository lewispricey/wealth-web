import React from "react";

const AccountCard = ({ name, type, balance }) => {
  return (
    <button>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>£{balance}</p>
    </button>
  );
};

export default AccountCard;
