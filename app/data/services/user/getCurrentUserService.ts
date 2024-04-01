import axiosInstance from "../axiosInstance";
import API from "../constantsAPI";

const getCurrentUserService = async () => {
  const { data } = await axiosInstance.get(API.ENDPOINTS.USERS.CURRENT);
  return data;
};

export default getCurrentUserService;
