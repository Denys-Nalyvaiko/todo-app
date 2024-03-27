import ITask from "./ITask";
import ITheme from "./ITheme";

interface IGlobalContext {
  theme: ITheme;
  tasks: ITask[];
}

export default IGlobalContext;
