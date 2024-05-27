import axios from "axios";

const getCategories = () => {
  const URL = "http://localhost:8000/api/categories";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.get(URL, config).then(({ data }) => {
    return data;
  });
};

export default getCategories;
