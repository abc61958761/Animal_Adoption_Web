import appserver from "./appserve";

const API_URL = "/users";

export default {
  async signup(params) {
    return await appserver.post(`${API_URL}/signup`, params);
  },
  async login(params) {
    return await appserver.post(`${API_URL}/login`, params);
  }
};
