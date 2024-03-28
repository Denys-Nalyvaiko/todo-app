"use client";

import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import toast from "react-hot-toast";
import { BsNodePlusFill } from "react-icons/bs";
import CreateTaskDto from "@/app/data/dto/CreateTaskDto";
import { useGlobalState } from "@/app/context/GlobalProvider";

const CreateTaskContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  const { createTask, closeModal }: any = useGlobalState();

  const options: Record<string, Dispatch<SetStateAction<any>>> = {
    title: setTitle,
    description: setDescription,
    date: setDate,
    isCompleted: setIsCompleted,
    isImportant: setIsImportant,
  };

  const handleInputChange =
    (name: string) =>
    (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      const setValue = options[name];
      setValue(event.target.value);
    };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task: CreateTaskDto = {
      title,
      description,
      date,
      isCompleted: Boolean(isCompleted),
      isImportant: Boolean(isImportant),
    };

    createTask(task);
    closeModal();

    toast.success("Successfully created");
  };

  return (
    <form
      action="submit"
      className="shadow-md rounded-2xl text-colorGrey1"
      onSubmit={handleFormSubmit}
    >
      <h2 className="text-xl font-semibold">Create a Task</h2>
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
      <div className="input_control">
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
        <label htmlFor="isCompleted">Toggle Completed</label>
        <input
          value={isCompleted.toString()}
          type="checkbox"
          name="isCompleted"
          id="isCompleted"
          onChange={handleInputChange("isCompleted")}
        />
      </div>
      <div className="input_control toggler">
        <label htmlFor="isImportant">Toggle Important</label>
        <input
          value={isImportant.toString()}
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
          <BsNodePlusFill /> Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTaskContent;
