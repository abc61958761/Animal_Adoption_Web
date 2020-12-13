import axios from "axios";

// const env = process.env;

const appserve = axios.create({
  baseURL: `${process.env.ANIMAL_ADOPTION_HTTP_HOST}:${process.env.ANIMAL_ADOPTION_HTTP_PORT}/api`
});

export default appserve;
