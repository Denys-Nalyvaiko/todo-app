"use client";

import CreateTaskContent from "../Modals/CreateTaskContent/CreateTaskContent";
import TaskItem from "../TaskItem/TaskItem";
import { ITasksProps } from "@/app/interfaces";

const Tasks = ({ title, tasks }: ITasksProps) => {
  return (
    <main className="tasks_container bg-colorBg2 border-borderColor2">
      {false && <CreateTaskContent />}
      <ul>
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
      </ul>
    </main>
  );
};

export default Tasks;
