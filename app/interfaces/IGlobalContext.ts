import ITask from "./ITask";

interface IGlobalContext {
  tasks: ITask[];
  completedTasks: ITask[];
  incompletedTasks: ITask[];
  importantTasks: ITask[];
  isLoading: boolean;
  modal: boolean;
  openModal(): void;
  closeModal(): void;
  createTask(task: ITask): void;
  updateTask(task: ITask): void;
  deleteTask(id: number): void;
}

export default IGlobalContext;
