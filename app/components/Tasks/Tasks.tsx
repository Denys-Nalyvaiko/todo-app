"use client";

import { ChangeEvent, useState } from "react";
import { BsNodePlusFill } from "react-icons/bs";
import TaskItem from "../TaskItem/TaskItem";
import { ITasksProps } from "@/app/interfaces";
import { useGlobalState } from "@/app/context/GlobalProvider";
import ModalWrapper from "../Modals/ModalWrapper/ModalWrapper";
import UpsertTaskContent from "../Modals/UpsertTaskContent/UpsertTaskContent";
import SearchTask from "../SearchTask/SearchTask";

const Tasks = ({ title, tasks }: ITasksProps) => {
  const { isLoading, modal, openModal }: any = useGlobalState();
  const [filter, setFilter] = useState("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const updateTasks = () =>
    tasks.filter(({ title }) =>
      title.toLowerCase().includes(filter.toLowerCase().trim())
    );

  const filteredTasks = updateTasks();

  return (
    <main className="tasks_container bg-colorBg2 border-borderColor2">
      {modal && (
        <ModalWrapper>
          <UpsertTaskContent />
        </ModalWrapper>
      )}

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold relative max-lg:hidden">
          {title}
        </h1>
        <SearchTask filter={filter} onChange={handleSearchInputChange} />
        <button
          type="button"
          className="flex gap-2 text-colorGrey2 hover:text-colorGrey0 "
          onClick={() => openModal(null)}
        >
          <BsNodePlusFill size="1.6em" />
          Add New Task
        </button>
      </div>

      {!isLoading ? (
        <ul className="tasks_grid my-4">
          {filteredTasks?.map(
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
            onClick={() => openModal(null)}
          >
            <BsNodePlusFill size="1.6em" />
            Add New Task
          </button>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Tasks;
