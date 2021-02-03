import { URL, HTTP_STATUSES } from "./constants";

export const api = {
  async getFilmsName() {
    try {
      const res = await fetch(`${URL}=scary`);
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