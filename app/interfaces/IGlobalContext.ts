import TypeInitialLoadingProps from "./TypeInitialLoadingProps";
import ITask from "./ITask";
import RegisterUserDto from "../data/dto/RegisterUserDto";
import LoginUserDto from "../data/dto/LoginUserDto";

interface IGlobalContext {
  tasks: ITask[];
  isLoggedIn: boolean;
  modalTask: ITask | undefined;
  completedTasks: ITask[];
  incompletedTasks: ITask[];
  importantTasks: ITask[];
  isLoading: TypeInitialLoadingProps;
  modal: boolean;
  collapsed: boolean;
  toggleLoggedIn(option: boolean): void;
  openModal(id: number | null): void;
  closeModal(): void;
  collapseMenu(): void;
  registerUser(userData: RegisterUserDto): void;
  loginUser(userData: LoginUserDto): void;
  logoutUser(): void;
  getCurrentUser(): void;
  getAllTasks(sortBy: string | undefined): void;
  getOneTask(taskId: number): void;
  createTask(task: ITask): void;
  updateTask(task: ITask): void;
  deleteTask(taskId: number): void;
}

export default IGlobalContext;
