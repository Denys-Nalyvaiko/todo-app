import LoginUserDto from "../dto/LoginUserDto";
import axiosInstance from "./axiosInstance";
import API from "./constantsAPI";

const loginUserService = async (userData: LoginUserDto) => {
  const { data } = await axiosInstance.post(API.ENDPOINTS.AUTH.LOGIN, userData);
  return data;
};

export default loginUserService;
