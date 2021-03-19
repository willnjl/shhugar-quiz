import axios from "axios";
// return a new version of axios with useful settings applied
export default axios.create({
  baseURL: "https://restful.training/api/counters",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer b1a4b1a4b1a4-api-key-b1a4b1a4ab1a4",
  },
});
