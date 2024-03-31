"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { BsNodePlusFill } from "react-icons/bs";
import TaskItem from "../TaskItem/TaskItem";
import { ITasksProps } from "@/app/interfaces";
import { useGlobalState } from "@/app/context/GlobalProvider";
import ModalWrapper from "../Modals/ModalWrapper/ModalWrapper";
import UpsertTaskContent from "../Modals/UpsertTaskContent/UpsertTaskContent";
import SearchTask from "../SearchTask/SearchTask";
import DropdownWrapper from "../Dropdown/DropdownWrapper/DropdownWrapper";
import SkeletonTaskLoader from "../Loaders/SkeletonTaskLoader/SkeletonTaskLoader";
import ClockLoader from "../Loaders/ClockLoader/ClockLoader";

const Tasks = ({ title, tasks }: ITasksProps) => {
  const { modal, openModal, isLoading }: any = useGlobalState();
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
    <main className="tasks_container w-full bg-colorBg2 border-borderColor2">
      {modal && (
        <ModalWrapper>
          <UpsertTaskContent />
        </ModalWrapper>
      )}

      <DropdownWrapper buttonText="Sort By" />

      {isLoading?.taskUpsert && <ClockLoader />}

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

      {!isLoading?.taskList ? (
        <ul className="tasks_grid my-4">
          {filteredTasks?.map(
            ({ id, title, description, date, is_completed, is_important }) => (
              <TaskItem
                key={id}
                id={id}
                title={title}
                description={description}
                date={date}
                is_completed={is_completed}
                is_important={is_important}
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
        <SkeletonTaskLoader />
      )}
    </main>
  );
};

export default Tasks;
