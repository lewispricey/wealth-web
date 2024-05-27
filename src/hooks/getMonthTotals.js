import axios from "axios";

const getMonthTotals = () => {
  const URL = "http://localhost:8000/api/overview/month";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(URL, config).then(({ data }) => {
    return data;
  });
};

export default getMonthTotals;
