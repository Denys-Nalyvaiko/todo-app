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
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    getAllTasks();
  }, []);

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

  return (
    <GlobalContext.Provider value={{ tasks, deleteTask, isLoading }}>
      <GlobalUpdateContext.Provider value={{}}>
        {isLoading ? <p>Loading...</p> : children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
