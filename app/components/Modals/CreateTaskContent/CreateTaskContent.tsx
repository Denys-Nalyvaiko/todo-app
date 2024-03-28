"use client";

import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import toast from "react-hot-toast";
import CreateTaskDto from "@/app/data/dto/CreateTaskDto";
import printError from "@/app/helpers/printError";

const CreateTaskContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

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

    try {
      console.log("NEW TASK: ", task);
      toast.success("Successfully created");
    } catch (error) {
      printError(error);
    }
  };

  return (
    <>
      <h1>Create a Task</h1>
      <form action="submit" onSubmit={handleFormSubmit}>
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
        <div className="input_control">
          <label htmlFor="isCompleted">Toggle Completed</label>
          <input
            value={isCompleted.toString()}
            type="checkbox"
            name="isCompleted"
            id="isCompleted"
            onChange={handleInputChange("isCompleted")}
          />
        </div>
        <div className="input_control">
          <label htmlFor="isImportant">Toggle Important</label>
          <input
            value={isImportant.toString()}
            type="checkbox"
            name="isImportant"
            id="isImportant"
            onChange={handleInputChange("isImportant")}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateTaskContent;
