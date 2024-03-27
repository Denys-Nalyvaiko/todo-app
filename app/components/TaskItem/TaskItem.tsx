import { ITask } from "@/app/interfaces";

const TaskItem = ({
  title,
  description,
  date,
  isCompleted,
  isImportant,
}: ITask) => {
  return (
    <li>
      <p>{title}</p>
    </li>
  );
};

export default TaskItem;
