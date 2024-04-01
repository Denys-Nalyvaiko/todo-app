import axiosInstance from "../axiosInstance";
import API from "../constantsAPI";

const fetchOneTask = async (taskId: number) => {
  const { data } = await axiosInstance.get(`${API.ENDPOINTS.TASKS}/${taskId}`);
  return data;
};

export default fetchOneTask;
