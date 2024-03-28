"use client";

import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import { BsNodePlusFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import CreateTaskDto from "@/app/data/dto/CreateTaskDto";
import UpdateTaskDto from "@/app/data/dto/UpdateTaskDto";
import { useGlobalState } from "@/app/context/GlobalProvider";

const UpsertTaskContent = () => {
  const { createTask, updateTask, closeModal, modalTask }: any =
    useGlobalState();

  const [title, setTitle] = useState(modalTask?.title ?? "");
  const [description, setDescription] = useState(modalTask?.description ?? "");
  const [date, setDate] = useState(modalTask?.date ?? "");
  const [isCompleted, setIsCompleted] = useState(
    modalTask?.isCompleted ?? false
  );
  const [isImportant, setIsImportant] = useState(
    modalTask?.isImportant ?? false
  );

  const options: Record<string, Dispatch<SetStateAction<any>>> = {
    title: setTitle,
    description: setDescription,
    date: setDate,
    isCompleted: setIsCompleted,
    isImportant: setIsImportant,
  };

  const handleInputChange =
    (name: string) =>
    ({
      target,
    }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const setValue = options[name];
      const value =
        target.type === "checkbox"
          ? (target as HTMLInputElement).checked
          : target.value;

      setValue(value);
    };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task: CreateTaskDto | UpdateTaskDto = {
      title,
      description,
      date,
      isCompleted,
      isImportant,
    };

    modalTask ? updateTask({ ...task, id: modalTask.id }) : createTask(task);

    closeModal();
  };

  return (
    <form
      action="submit"
      className="relative h-full shadow-md rounded-2xl text-colorGrey1"
      onSubmit={handleFormSubmit}
    >
      <h2 className="text-xl font-semibold">
        {!modalTask ? "Create a Task" : "Edit Task"}
      </h2>
      <button
        type="button"
        className="absolute right-0 top-0 hover:text-colorGrey0 transition-all"
        onClick={closeModal}
      >
        <ImCross />
      </button>

      <div className="input_control">
        <label htmlFor="title">Title</label>
        <input
          value={title}
          type="text"
          name="title"
          id="title"
          placeholder="Example title"
          onChange={handleInputChange("title")}
        />
      </div>
      <div className="input_control">
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          name="description"
          id="description"
          rows={4}
          placeholder="Example description"
          onChange={handleInputChange("description")}
        />
      </div>
      <div className="input_control mb-8">
        <label htmlFor="date">Date</label>
        <input
          value={date}
          type="date"
          name="date"
          id="date"
          onChange={handleInputChange("date")}
        />
      </div>
      <div className="input_control toggler">
        <label htmlFor="isCompleted" className="form_control">
          Toggle Completed
        </label>
        <input
          defaultChecked={isCompleted}
          type="checkbox"
          name="isCompleted"
          id="isCompleted"
          onChange={handleInputChange("isCompleted")}
        />
      </div>
      <div className="input_control toggler">
        <label htmlFor="isImportant" className="form_control">
          Toggle Important
        </label>
        <input
          defaultChecked={isImportant}
          type="checkbox"
          name="isImportant"
          id="isImportant"
          onChange={handleInputChange("isImportant")}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          name="createTask"
          className="submit_button bg-slate-300 text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-slate-300 hover:border-slate-300"
        >
          {!modalTask ? (
            <>
              <BsNodePlusFill /> Create Task
            </>
          ) : (
            <>
              <MdEdit /> Edit Task
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default UpsertTaskContent;
