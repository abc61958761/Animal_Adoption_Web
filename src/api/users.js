import appserve from "./appserve";

const API_URL = "/users";

export default {
  async signup(params) {
    return await appserve.post(`${API_URL}/signup`, params);
  },
  async login(params) {
    return await appserve.post(`${API_URL}/login`, params);
  }
};
