import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { ITask } from "@/app/interfaces";

const TaskItem = ({
  id,
  title,
  description,
  date,
  isCompleted,
  isImportant,
}: ITask) => {
  return (
    <li className="task_item bg-colorBg5 shadow-shadow border-borderColor2">
      <div>
        <h3>{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div>
        <p>{date}</p>
        {isCompleted ? (
          <button type="button">Complete</button>
        ) : (
          <button>Incomplete</button>
        )}
        <div>
          <button type="button">
            <MdEdit />
          </button>
          <button type="button">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
