"use client";

import { createContext, useContext, useState, useEffect } from "react";
import printError from "../helpers/printError";

import tasksData from "../data/tasksData.json";
import {
  ChildrenProps,
  IGlobalContext,
  IGlobalUpdateContext,
  ITask,
} from "../interfaces";

export const GlobalContext = createContext<IGlobalContext | null>(null);
export const GlobalUpdateContext = createContext<IGlobalUpdateContext | null>(
  null
);

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    getAllTasks();
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapseMenu = () => {
    setCollapsed((prev) => !prev);
  };

  const getAllTasks = async () => {
    setIsLoading(true);

    try {
      const initialTasks = tasksData;
      setTasks(initialTasks);
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createTask = async (newTask: ITask) => {
    setIsLoading(true);

    try {
      setTasks((prev) => [{ ...newTask, id: Date.now() }, ...prev]);
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTask = async (targetTask: ITask) => {
    setIsLoading(true);

    try {
      const updatedTasks = tasks.map((task) =>
        task.id !== targetTask.id ? task : { ...task, ...targetTask }
      );

      setTasks(updatedTasks);
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (id: number) => {
    setIsLoading(true);

    try {
      setTasks((prev) => prev.filter(({ id: taskId }) => taskId !== id));
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const completedTasks = tasks.filter(
    ({ isCompleted }) => isCompleted === true
  );

  const incompletedTasks = tasks.filter(
    ({ isCompleted }) => isCompleted === false
  );

  const importantTasks = tasks.filter(
    ({ isImportant }) => isImportant === true
  );

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        isLoading,
        completedTasks,
        incompletedTasks,
        importantTasks,
        modal,
        collapsed,
        openModal,
        closeModal,
        collapseMenu,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {isLoading ? <p>Loading...</p> : children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
