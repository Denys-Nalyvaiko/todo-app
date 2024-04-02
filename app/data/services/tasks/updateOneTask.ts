import UpdateTaskDto from "../../dto/UpdateTaskDto";
import axiosInstance from "../axiosInstance";
import API from "../constantsAPI";

const updateOneTask = async (taskId: number, task: UpdateTaskDto) => {
  const { data } = await axiosInstance.put(
    `${API.ENDPOINTS.TASKS}/${taskId}`,
    task
  );
  return data;
};

export default updateOneTask;
