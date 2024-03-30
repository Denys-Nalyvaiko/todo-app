import axiosInstance from "./axiosInstance";
import API from "./constantsAPI";

const fetchAllTasks = async () => {
  const { data } = await axiosInstance.get(API.ENDPOINTS.TASKS);
  return data;
};

export default fetchAllTasks;
