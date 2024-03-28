import ITask from "./ITask";

interface IGlobalContext {
  tasks: ITask[];
  completedTasks: ITask[];
  incompletedTasks: ITask[];
  importantTasks: ITask[];
  isLoading: boolean;
  deleteTask(id: number): void;
}

export default IGlobalContext;
