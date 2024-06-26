import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { MdNotificationImportant } from "react-icons/md";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { ITask } from "@/app/interfaces";
import { useGlobalState } from "@/app/context/GlobalProvider";

const TaskItem = ({
  id,
  title,
  description,
  date,
  is_completed,
  is_important,
}: ITask) => {
  const { updateTask, deleteTask, openModal }: any = useGlobalState();

  return (
    <li className="task_item overflow-auto bg-colorBg5 shadow-shadow border-borderColor2">
      <div>
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div>
        <p className="text-sm mb-2 ml-2 text-colorGrey2">{date}</p>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-6">
            <button
              type="button"
              className={`completed_button ${
                is_completed ? "bg-colorGreenDark" : "bg-colorDanger"
              }`}
              onClick={() => updateTask({ id, is_completed: !is_completed })}
            >
              {is_completed ? "Completed" : "Incompleted"}
            </button>
            <button
              type="button"
              className={is_important ? "text-red-400" : ""}
              onClick={() => updateTask({ id, is_important: !is_important })}
            >
              {is_important ? (
                <MdNotificationImportant size="1.4em" />
              ) : (
                <MdOutlineNotificationImportant size="1.4em" />
              )}
            </button>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="icon_button"
              onClick={() => openModal(id)}
            >
              <MdEdit size="1.2em" />
            </button>
            <button
              type="button"
              className="icon_button"
              onClick={() => deleteTask(id)}
            >
              <FaTrashAlt size="1.2em" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
