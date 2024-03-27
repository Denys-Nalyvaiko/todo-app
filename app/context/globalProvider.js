"use client";

import { createContext, useContext, useState, useEffect } from "react";
import printError from "../helpers/printError";

import tasksData from "../data/tasksData.json";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

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

  return (
    <GlobalContext.Provider value={{ tasks }}>
      <GlobalUpdateContext.Provider value={{}}>
        {isLoading ? <p>Loading...</p> : children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
