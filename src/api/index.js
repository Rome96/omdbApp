import { URL, HTTP_STATUSES } from "./constants";

export const api = {
  async getFilmsName(name) {
    if (!name) {
      name = 'simpson'
    }
    try {
      const res = await fetch(`${URL}=${name}`);
      const response = await res.json();
      if (res.status === HTTP_STATUSES.OK) {
        return response
      } else {
        return response
      }
    } catch (error) {
      console.log(error)
    }
  }
};