import axios from "axios";

// const env = process.env;

const appserve = axios.create({
  baseURL: `http://127.0.0.1:8848/api`
});

export default appserve;
