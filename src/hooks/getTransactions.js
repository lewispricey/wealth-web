import axios from "axios";

const getTransactions = () => {
  const URL = "http://localhost:8000/api/transactions";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      limit: 5,
      order: "desc",
    },
  };
  return axios.get(URL, config).then(({ data }) => {
    return data;
  });
};

export default getTransactions;
