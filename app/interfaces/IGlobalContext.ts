import ITask from "./ITask";

interface IGlobalContext {
  tasks: ITask[];
  completedTasks: ITask[];
  incompletedTasks: ITask[];
  importantTasks: ITask[];
  isLoading: boolean;
  modal: boolean;
  collapsed: boolean;
  openModal(): void;
  closeModal(): void;
  collapseMenu(): void;
  createTask(task: ITask): void;
  updateTask(task: ITask): void;
  deleteTask(id: number): void;
}

export default IGlobalContext;
