import axiosInstance from "../axiosInstance";
import API from "../constantsAPI";

const deleteOneTask = async (taskId: number) => {
  const response = axiosInstance.delete(`${API.ENDPOINTS.TASKS}/${taskId}`);
  return response;
};

export default deleteOneTask;
