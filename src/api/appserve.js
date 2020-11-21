import axios from "axios";

// const env = process.env;

const appserve = axios.create({
  baseURL: `http://0.0.0.0:8848/api`
});

export default appserve;
