import axiosInstance from "../axiosInstance";
import API from "../constantsAPI";

const logoutUserService = async () => {
  const { data } = await axiosInstance.get(API.ENDPOINTS.AUTH.LOGOUT);
  return data;
};

export default logoutUserService;
