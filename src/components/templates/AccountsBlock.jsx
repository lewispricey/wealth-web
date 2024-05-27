import React, { useEffect, useState } from "react";
import SubHeading from "../atoms/SubHeading";
import AccountCard from "../molecules/AccountCard";
import getAccounts from "../../hooks/getAccounts";

const AccountsBlock = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts().then((data) => {
      setAccounts(data.accounts);
    });
  }, []);

  return (
    <div>
      <SubHeading text="Account Overview" />

      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          name={account.name}
          type={account.type}
          balance={account.balance}
        />
      ))}
    </div>
  );
};

export default AccountsBlock;
