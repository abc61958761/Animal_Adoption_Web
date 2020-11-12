import axios from "axios";

// const env = process.env;

const appserve = axios.create({
  baseURL: `https://localhost:3000/api`
});

export default appserve;