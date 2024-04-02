import axiosInstance from "../data/services/axiosInstance";

const token = {
  set(tokenValue: string) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
  },

  unset() {
    axiosInstance.defaults.headers.common.Authorization = "";
  },
};

export default token;
