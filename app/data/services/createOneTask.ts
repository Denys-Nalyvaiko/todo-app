import CreateTaskDto from "../dto/CreateTaskDto";
import axiosInstance from "./axiosInstance";
import API from "./constantsAPI";

const createOneTask = async (task: CreateTaskDto) => {
  const { data } = await axiosInstance.post(API.ENDPOINTS.TASKS, task);
  return data;
};

export default createOneTask;
