import RegisterUserDto from "../../dto/RegisterUserDto";
import axiosInstance from "../axiosInstance";
import API from "../constantsAPI";

const registerUserService = async (userData: RegisterUserDto) => {
  const { data } = await axiosInstance.post(
    API.ENDPOINTS.AUTH.REGISTER,
    userData
  );
  return data;
};

export default registerUserService;
