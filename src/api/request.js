import axios from "axios";
import store from "../store";
import ENDPOINTS from "./endpoints";

const request = (store) => (config) => {
  const token = store && store.getState().auth.token;
  axios.defaults.baseURL = ENDPOINTS.BASE;

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return axios({ ...config, ...headers });
};

export default request(store);
