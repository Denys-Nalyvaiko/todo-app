import axiosInstance from "./axiosInstance";
import API from "./constantsAPI";

const fetchAllTasks = async (sortBy: string = "original") => {
  const { data } = await axiosInstance.get(
    `${API.ENDPOINTS.TASKS}?sort_by=${sortBy}`
  );
  return data;
};

export default fetchAllTasks;
