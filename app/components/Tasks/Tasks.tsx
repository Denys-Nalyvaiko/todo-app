"use client";

import { BsNodePlusFill } from "react-icons/bs";
import CreateTaskContent from "../Modals/CreateTaskContent/CreateTaskContent";
import TaskItem from "../TaskItem/TaskItem";
import { ITasksProps } from "@/app/interfaces";

const Tasks = ({ title, tasks }: ITasksProps) => {
  return (
    <main className="tasks_container bg-colorBg2 border-borderColor2">
      {false && <CreateTaskContent />}

      <h1 className="text-2xl font-extrabold relative">{title}</h1>
      <ul className="tasks_grid my-4">
        {tasks?.map(
          ({ id, title, description, date, isCompleted, isImportant }) => (
            <TaskItem
              key={id}
              id={id}
              title={title}
              description={description}
              date={date}
              isCompleted={isCompleted}
              isImportant={isImportant}
            />
          )
        )}

        <button
          type="button"
          className="create_task text-colorGrey2 border-colorGrey5 hover:text-colorGrey0 hover:bg-colorGrey5"
        >
          <BsNodePlusFill size="1.6em" />
          Add New Task
        </button>
      </ul>
    </main>
  );
};

export default Tasks;
