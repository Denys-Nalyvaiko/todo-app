import axios from "axios";
import API from "./constantsAPI";

const axiosInstance = axios.create({
  baseURL: API.BASE_URL,
});

export default axiosInstance;
