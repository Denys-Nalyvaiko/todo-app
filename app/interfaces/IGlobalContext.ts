import ITask from "./ITask";

interface IGlobalContext {
  tasks: ITask[];
  modalTask: ITask | undefined;
  completedTasks: ITask[];
  incompletedTasks: ITask[];
  importantTasks: ITask[];
  isLoading: boolean;
  modal: boolean;
  collapsed: boolean;
  openModal(id: number | null): void;
  closeModal(): void;
  collapseMenu(): void;
  getOneTask(taskId: number): void;
  createTask(task: ITask): void;
  updateTask(task: ITask): void;
  deleteTask(taskId: number): void;
}

export default IGlobalContext;
